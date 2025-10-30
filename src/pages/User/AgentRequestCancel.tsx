import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router"


export function AgentRequestCancel() {

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
        <Card className="w-full max-w-sm  ">
      <CardHeader>
        <CardTitle>Payment Canceled</CardTitle>
        
        <CardDescription>
          Go to home and try again
        </CardDescription>
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
        <Link to="/">
        <Button variant={"link"}  className="w-full">
          Go To Home
        </Button>
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}
