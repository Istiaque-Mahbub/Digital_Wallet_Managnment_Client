import { GetAllTransTable } from "@/components/modules/Admin/GetAllTransTable";


export default function GetAllTransactions() {

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-5xl font-semibold">All Transaction Details</h1>
      </div>
      <div className="flex justify-center mt-5">
        <GetAllTransTable/>
      </div>
    </div>
  )
}
