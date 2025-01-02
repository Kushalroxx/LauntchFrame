import { z } from "zod";

export const signinSchema = z.object({
    email:z.string().email({message:"entar valid email"}),
    password:z.string().min(8, { message: 'Password must be at least 8 characters' })
    .max(20, { message: 'Password cannot exceed 20 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character' }),
  })