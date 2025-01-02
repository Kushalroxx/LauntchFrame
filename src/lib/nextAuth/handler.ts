import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { z } from "zod";
import { findUserInDb } from "../dbCalls/findUserInDb";
import { comparePassword } from "../passwordHelper/comparePassword";
import { redirect } from "next/navigation";
import { createUSerInDb } from "@/lib/dbCalls/createUserInDb";

const userSchema = z.object({
    email:z.string().email({message:"enter a valid email"}),
    password:z.string().min(8,{message:"password must be 8 characters"}).max(15,{message:"Password can't more than 15 characters"})

})
export const {handlers,signIn,signOut,auth} = NextAuth({
    providers:[
        Google,
        Credentials({
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials) {
                console.log(credentials);
                
                const {email, password} = await userSchema.parseAsync(credentials) 
                const user = await findUserInDb(email)
                if(!user){
                     return null
                }
                if(!user.password){
                    // the json is not in the responce
                    throw new Error("User has no password")
                }
                const isVarified = await comparePassword(password,user.password)
                if (!isVarified) {
                    return null
                }
                return user
            },
        })
     ],callbacks:{
        async signIn({user,account,profile}){
            if(!user.email||!user.name){
                return false
            }            
            const existedUser = await findUserInDb(user.email)
            if (!existedUser) {
                await createUSerInDb(user.email,user.name)
            }
            return true
        },
        // @ts-ignore
       async session(session, token, user){
       let existedUser = await findUserInDb(session?.user?.email)
    session.user.id = existedUser?.id
       return session
     },
     async jwt({ token, user }) {
        if (user) {
            token.email = user.email;
            token.id = user.id;
        }
        return token;
    }
    },
     pages:{
        signIn:"/signin",
        error:"/signin"
     } 
})