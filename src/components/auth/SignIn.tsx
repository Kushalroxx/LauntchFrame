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
import { signinSchema } from "@/lib/zodSchema/signinSchema"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ClipLoader } from "react-spinners"

export function Signin({className}:{className:string}) {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
    const form = useForm<z.infer<typeof signinSchema>>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
          email:"",
          password:""
        },})
    const onSubmit = async(values: z.infer<typeof signinSchema>)=>{
            setLoading(e=>!e)
            const result = await signIn("credentials",{email:values.email,password:values.password,redirect:false})
            setLoading(e=>!e)
            if(result?.error ==="Configuration"){
              router.push(`/signup/${values.email}`)
            }else{
              form.setError("password",{message:"Please provide valid email & password"})
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
        <Button type="submit">{loading?<ClipLoader size={20} color={"#fffff"} />:"Submit"}</Button><div className=" flex justify-center items-center gap-3">
        <div className=" w-1/3 h-[1px] bg-foreground"></div>
        <div className="text-foreground">or</div>
        <div className="w-1/3 h-[1px] bg-foreground"></div>
        </div>
        <Button variant={"ghost"} type="button"
        onClick={e=>signIn("google")}
        className="border-secondary border"><FcGoogle/> Google</Button>
      </form>
    </Form>
    </CardContent>
    </Card>
    </motion.div>
  )
}
