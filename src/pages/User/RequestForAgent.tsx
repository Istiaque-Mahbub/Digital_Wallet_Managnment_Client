
import { Button } from '@/components/ui/button';
import { usePayNowMutation, useRequestForAgentMutation, useUserQuery } from '@/redux/features/user/userApi';
import { useState } from 'react';
import { toast } from 'sonner';
export default function RequestForAgent() {
  const [requestForAgent] = useRequestForAgentMutation()

  const {data:userData} = useUserQuery(undefined)
  console.log(userData?.data?.payment)

  const [payNow] = usePayNowMutation()

  const handleRequestForAgent = async() =>{
    try {
      const res = await requestForAgent(undefined).unwrap()
      console.log(res?.data?.paymentUrl)
      if(res?.success){
        window.location.href = res?.data?.paymentUrl
       
      }
      console.log(res)
    } catch (error:any) {
     
      console.log(error)
      toast.error(error?.data?.message)
    }
  }
  const handlePayNow = async() =>{
    try {
      const res = await payNow(userData?.data?._id).unwrap()
      if(res?.success){
        window.location.href = res?.data?.paymentUrl
       
      }
      console.log(res)

    } catch (error:any) {
     
      console.log(error)
      toast.error(error?.data?.message)
    }
  }

  return (
    <div>
      <Button className='m-5' onClick={handleRequestForAgent} disabled={userData?.data?.payment ? true : false}>Request for Becoming Agent</Button>
      <p  className='text-3xl m-5 text-red-400 font-extralight'>IF YOU CLICK ON "Request for Becoming Agent" BUTTON AND DO NOT PAY THAT TIME, NOW CLICK ON BELLOW BUTTON FOR RESUME THE PAYMENT</p>
      <Button onClick={handlePayNow} className='m-5' disabled={!userData?.data?.payment ? true : false}>PAY NOW</Button>
    </div>
  )
}
