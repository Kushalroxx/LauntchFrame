import { z } from "zod";

export const signupSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email:z.string().email({message:"entar valid email"}),
    password:z.string().min(8, { message: 'Password must be at least 8 characters' })
    .max(20, { message: 'Password cannot exceed 20 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character' }),
    confirmPassword:z.string()
  }).refine((e)=>e.password === e.confirmPassword,{message:"password and confirm password must be same",path:["confirmPassword"]})
  