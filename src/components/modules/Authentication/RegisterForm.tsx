import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import Password from "@/components/ui/Password"
import { Link } from "react-router"


const RegisterFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long." })
        .max(50, { message: "Name cannot exceed 50 characters." }),
    email: z
        .email({ message: "Invalid email address format." })
        .min(5, { message: "Email must be at least 5 characters long." })
        .max(100, { message: "Email cannot exceed 100 characters." }),
    nidNumber:z.string({message:"Must be fill the nid number"})
        .regex(/^(?:\d{10}|\d{13}|\d{17})$/,{
            message:"Give a valid nid number"
        }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .regex(/^(?=.*[A-Z])/, {
            message: "Password must contain at least 1 uppercase letter.",
        })
        .regex(/^(?=.*[!@#$%^&*])/, {
            message: "Password must contain at least 1 special character.",
        })
        .regex(/^(?=.*\d)/, {
            message: "Password must contain at least 1 number.",
        }),
    confirmPassword: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .regex(/^(?=.*[A-Z])/, {
            message: "Password must contain at least 1 uppercase letter.",
        })
        .regex(/^(?=.*[!@#$%^&*])/, {
            message: "Password must contain at least 1 special character.",
        })
        .regex(/^(?=.*\d)/, {
            message: "Password must contain at least 1 number.",
        }),
    phone: z
        .string()
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
            message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
        }),

    }).refine((data)=>data.password === data.confirmPassword,{
      message:"Password and confirm password doesn't match",
      path:["confirmPassword"]
    })

export function RegisterForm({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {

    const form = useForm<z.infer<typeof RegisterFormSchema>>({
        resolver:zodResolver(RegisterFormSchema),
        defaultValues:{
            name:"",
            nidNumber:"",
            phone:"",
            email:"",
            password:"",
            confirmPassword:''
        }
    })



    const onSubmit  = (data : z.infer<typeof RegisterFormSchema>) =>{
        console.log(data)

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
             {/* Name */}

                <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input  placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Name Field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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
        {/* NID */}
                <FormField
          control={form.control}
          name="nidNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NID Number</FormLabel>
              <FormControl>
                <Input  placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                NID Field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Phone */}
                <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input  placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
               Phone Number
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


        {/*Confirm Password */}
                <FormField
          control={form.control}
          name="confirmPassword"
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

            <p className="mt-4 text-sm">Have an account already? <Link className="text-blue-500 font-semibold underline" to="/login">Login</Link></p>

        </div>
     
    </div>
  )
}
