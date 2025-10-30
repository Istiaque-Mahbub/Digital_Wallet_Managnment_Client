import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useAgentAddMoneyMutation } from "@/redux/features/user/userApi"



const AddAgentMoneySchema = z.object({
  amount: z.string()
  })

  
  export function AddAgentMoneyFrom({
      className,
      ...props
    }: React.HtmlHTMLAttributes<HTMLDivElement>) {
        
        
        const [addAgentMoney] =  useAgentAddMoneyMutation()
        
        const form = useForm<z.infer<typeof AddAgentMoneySchema>>({
            resolver:zodResolver(AddAgentMoneySchema),
            defaultValues:{
                amount:""
            }
        })
       

        
        
        const onSubmit  = async (data : z.infer<typeof AddAgentMoneySchema>) =>{
            console.log(data)
            const toastId = toast.loading("Money sending.....")
        try {

            const payload = {amount:Number(data?.amount)}

            const res =  await addAgentMoney(payload).unwrap()

            console.log(res)

            
           
        } catch (error:any) {
            console.log(error.data)
            if(!error?.data?.success){
                 toast.error(error?.data?.message,{id:toastId})
            }
            
        }

    }

  return (
    <div className={cn("flex flex-col gap-10", className)} {...props}>

        <div className="flex flex-col items-center gap-4 text-center">

            <p className="text-sm text-gray-400 ">Enter User Phone Number and Amount bellow</p>

        </div>

        <div className="grid">

            <Form {...form}>
                
                <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>

        {/* AMount */}
                <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
              <Input type="number" placeholder="Enter the amount" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Amount Field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-2 w-full" type="submit">Add Agent Money</Button>

                </form>

            </Form>

            

        </div>
     
    </div>
  )
}
