import type { ISidebarItems } from "@/types";
import { lazy } from "react";

const CashIn  = lazy(()=>import("@/pages/Agent/CashIn"))
const RequestAgentMoney  = lazy(()=>import("@/pages/Agent/RequestAgentMoney"))


export const agentSidebarItems:ISidebarItems[] = [
    {
      title: "Agent Dashboard",
      items: [
        {
          title: "Cash In",
          url: "/agent/cashIn",
          component:CashIn
        },
        {
          title: "Request For Agent Money",
          url: "/agent/request-for-agent-money",
          component:RequestAgentMoney
        },
       
      ],
    },
  ]
