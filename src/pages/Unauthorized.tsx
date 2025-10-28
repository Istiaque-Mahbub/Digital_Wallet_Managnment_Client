
import { Button } from "@/components/ui/button"
import unauthorizedImage from "../assets/images/unauthorized.jpg"
import { Link } from "react-router"
export default function Unauthorized() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">

     <div>
        <h1 className="font-extrabold">UNAUTHORIZED ACCESS</h1>
     </div>
        <div>
            <img src={unauthorizedImage} alt="" />
        </div>

        <div className="items-center">

            <Link to="/"><Button>GO TO HOME</Button></Link>

        </div>

    </div>
  )
}
