import prisma from "../../../prisma/db"
import bcrypt from "bcrypt"

export const createUSerInDb = async (email:string,name?:string|null,password?:string|null)=>{
    try {
        const user  = await prisma.user.create({data:{email:email,name:name}})
        return user
    } catch (error) {
        console.log(error);
        
    }
}