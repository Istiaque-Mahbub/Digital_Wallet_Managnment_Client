import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import Password from "@/components/ui/Password"
import { Link, useNavigate } from "react-router"
import { useLoginMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"

const formSchema = z.object({
    email: z
    .string()
    .email({ message: "Invalid email address format." })
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(100, { message: "Email cannot exceed 100 characters." }),

    password:z.string()
  })

export function LoginForm({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {

  const [login] = useLoginMutation()
  const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })



    const onSubmit  =async (data : z.infer<typeof formSchema>) =>{
        const payload = {
          email:data.email,
          password:data.password
        }

       try {
        const res = await login(payload).unwrap()

        if(res?.data?.email) {

          toast.success("User login successfully")
          navigate('/') 
        }


       } catch (error:any) {
        console.log(error)
        toast.error(error?.data?.message)
       }

    }

  return (
    <div className={cn("flex flex-col gap-10", className)} {...props}>

        <div className="flex flex-col items-center gap-4 text-center">

            <h1 className="text-2xl font-bold">Login to Your account</h1>

            <p className="text-sm text-gray-400 ">Enter your Email and Password bellow</p>

        </div>

        <div className="grid">

            <Form {...form}>
                
                <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
             {/* Email */}

                <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input  placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Email Field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
                <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Password {...field}></Password>
              </FormControl>
              <FormDescription className="sr-only">
                Password Field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-2" type="submit">Login</Button>

                </form>

            </Form>

            <p className="mt-4 text-sm">Don't have an account? <Link className="text-blue-500 font-semibold underline" to="/register">Register Now</Link></p>

        </div>
     
    </div>
  )
}
