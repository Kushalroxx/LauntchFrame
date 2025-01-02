"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui"
import {motion} from "framer-motion"
import { FcGoogle } from "react-icons/fc";
import PasswordInput from "../ui/passwordInput"
import { signupSchema } from "@/lib/zodSchema/signupSchema"
import { useState } from "react"
import { ClipLoader } from "react-spinners"
import axios from "axios"

export function Signup({className}:{className:string}) {
  const [loading, setLoading] = useState<boolean>(false)
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
          name: "",
          email:"",
          password:"",
          confirmPassword:""
        },})
    const onSubmit = async(values: z.infer<typeof signupSchema>)=>{
      setLoading(e=>!e)
      try {
        const res = await axios.post("/api/auth/signup",values,{withCredentials:true})
      } catch (error:any) {
        form.setError("confirmPassword",{message:error.response.data.message}); 
      }finally{
        setLoading(e=>!e)
      }
          }
  return (
    <motion.div initial={{opacity:0,y:10}} animate={{opacity:1, y:0}} whileHover={{scale:1.01}} transition={{duration:0.7,type:"spring", stiffness:300, damping:14}}>
    <Card className={className}>
        <CardHeader>
            <CardTitle className="p-0 m-0 text-center text-xl md:text-3xl">Sign up</CardTitle>
        </CardHeader>
        <CardContent>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel >Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel >Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel >Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel >Confirm password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">{loading?<ClipLoader color="#fffff" size={20}/>:"Submit"}</Button><div className=" flex justify-center items-center gap-3">
        <div className=" w-1/3 h-[1px] bg-foreground"></div>
        <div className="text-foreground">or</div>
        <div className="w-1/3 h-[1px] bg-foreground"></div>
        </div>
        <Button variant={"ghost"} type="button" className="border-secondary border"><FcGoogle/> Google</Button>
      </form>
    </Form>
    </CardContent>
    </Card>
    </motion.div>
  )
}
