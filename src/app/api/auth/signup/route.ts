import { createUSerInDb } from "@/lib/dbCalls/createUserInDb"
import { findUserInDb } from "@/lib/dbCalls/findUserInDb"
import { signIn } from "@/lib/nextAuth/handler"
import { hashPassword } from "@/lib/passwordHelper/hashPassword"

export async function POST(req:Request){
    try {
        const {email, name, password} = await req.json()
        if(!email||!name||!password){
            return Response.json({message:"please provide credentials"},{status:400})
        }
        const existedUser = await findUserInDb(email)
        if (existedUser) {
            return Response.json({message:"User already existed"},{status:409})
        }
        const hash = await hashPassword(password) 
        const user = await createUSerInDb(email,name,hash)
        const form = new FormData()
        form.append("email",user?.email||"")
        form.append("password", user?.password||"")
        await signIn("credentials",form)
    } catch (error) {
        return Response.json({message:"Internal server error"},{status:500})
        
    }
}