import bcrypt from "bcrypt"

export const comparePassword = async (password:string, encryptedPassword:string)=>{
    try {
        if(await bcrypt.compare(password,encryptedPassword)){
            return true
        }
        return false
        
    } catch (error) {
    console.log(error);
    
    }}