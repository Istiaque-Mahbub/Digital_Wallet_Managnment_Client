import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useCashOutMutation } from "@/redux/features/transaction/transactionApi"
import { useLazyPhoneQuery } from "@/redux/features/user/userApi"



const sendMoneyFormSchema = z.object({
    phone: z
        .string()
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
            message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
        }),
  amount: z.string()
  })

  
  export function CashOutFrom({
      className,
      ...props
    }: React.HtmlHTMLAttributes<HTMLDivElement>) {
        
        const [triggerPhoneQuery] = useLazyPhoneQuery()

       const [cashOut] = useCashOutMutation()
        
        
        const form = useForm<z.infer<typeof sendMoneyFormSchema>>({
            resolver:zodResolver(sendMoneyFormSchema),
            defaultValues:{
                phone:"",
                amount:""
            }
        })
        
        
        
        const onSubmit  =async (data : z.infer<typeof sendMoneyFormSchema>) =>{
            
            const toastId = toast.loading("Money sending.....")
        try {
            
            const receiverID = await triggerPhoneQuery(data.phone).unwrap()

            if(receiverID){
                const id = receiverID?.data?._id

                const cashOutPayload = {
                    receiverId:id,
                    amount:Number(data?.amount)
                }

                const result = await cashOut(cashOutPayload).unwrap()
               console.log(result)
                toast.success("Cash out successfully",{id:toastId})
            }
            
            
            console.log(receiverID)
            
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

            <p className="text-sm text-gray-400 ">Enter your Phone Number and Amount bellow</p>

        </div>

        <div className="grid">

            <Form {...form}>
                
                <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
             {/* Phone */}

                <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent Phone Number</FormLabel>
              <FormControl>
                <Input  placeholder="Enter receiver phone number" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
               Phone Number Field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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
        <Button className="mt-2 w-full" type="submit">Cash Out</Button>

                </form>

            </Form>

            

        </div>
     
    </div>
  )
}
