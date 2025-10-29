import { SendMoneyFrom } from "@/components/modules/User/SendMoneyFrom";

export default function SendMoney() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-5xl font-semibold">Send Money</h1>
      </div>
      <div className="flex justify-center mt-5">
        <SendMoneyFrom/>
      </div>
    </div>
  )
}
