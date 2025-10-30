import { AddAgentMoneyFrom } from "@/components/modules/Agent/AddAgentMoney";

export default function RequestAgentMoney() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-5xl font-semibold">Add Agent Money</h1>
      </div>
      <div className="flex justify-center mt-5">
        <AddAgentMoneyFrom/>
      </div>
    </div>
  )
}
