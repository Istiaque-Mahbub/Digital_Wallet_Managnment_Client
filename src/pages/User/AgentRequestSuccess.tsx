import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLogoutMutation } from "@/redux/features/auth/auth.api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import { toast } from "sonner"


export function AgentRequestSuccess() {
    const [logout] = useLogoutMutation()

const navigate = useNavigate()
const [secondsLeft, setSecondsLeft] = useState(10)

const handleLogout =async () =>{
    try {
         await logout(undefined).unwrap()
        toast.success("Logout successfully")
         navigate("/login")
         
    } catch (error) {
        toast.error("Logout failed")
      console.error(error)
    }
}

useEffect(() => {
    if (secondsLeft === 0) {
      handleLogout()
      return
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [secondsLeft])

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
        <Card className="w-full max-w-sm  ">
      <CardHeader>
        <CardTitle>Payment Successful</CardTitle>
        
        <CardDescription>
          You must logout for seeing updated information.
          You’ll be logged out automatically in{" "}
            <span className="font-semibold text-red-500">{secondsLeft}</span>
        </CardDescription>
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
        <Button onClick={handleLogout} className="w-full">
          Logout
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
