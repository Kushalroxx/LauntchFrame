import prisma from "../../../prisma/db"

export const findUserInDb = async(email:string)=>{
    try {
        const user = await prisma.user.findFirst({
            where:{email:email}   
        })
        if(!user){
             return null   
        }
        return user
    } catch (error) {
        console.log(error);
        
    }
}