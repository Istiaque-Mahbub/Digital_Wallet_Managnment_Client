import { CashInFrom } from "@/components/modules/Agent/CashInFrom";


export default function CashIn() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-5xl font-semibold">Cash In</h1>
      </div>
      <div className="flex justify-center mt-5">
        <CashInFrom/>
      </div>
    </div>
  )
}
