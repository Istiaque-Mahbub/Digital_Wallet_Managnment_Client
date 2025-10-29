import { CashOutFrom } from "@/components/modules/User/CashOutFrom";


export default function CashOut() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-5xl font-semibold">Cash Out</h1>
      </div>
      <div className="flex justify-center mt-5">
        <CashOutFrom/>
      </div>
    </div>
  )
}
