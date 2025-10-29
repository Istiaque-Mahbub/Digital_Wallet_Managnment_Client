import { GetAllUsersTable } from "@/components/modules/Admin/GetAllUsersTable";


export default function GetAllUsers() {
 
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-5xl font-semibold">All Users Details</h1>
      </div>
      <div className="flex justify-center mt-5">
        <GetAllUsersTable/>
      </div>
    </div>
  )
}
