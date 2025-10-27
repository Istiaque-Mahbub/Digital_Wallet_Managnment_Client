import type { ISidebarItems } from "@/types";
import { lazy } from "react";

const CashOut  = lazy(()=>import("@/pages/User/CashOut"))
const RequestForAgent  = lazy(()=>import("@/pages/User/RequestForAgent"))
const SendMoney  = lazy(()=>import("@/pages/User/SendMoney"))

export const userSidebarItems:ISidebarItems[] = [
    {
      title: "User Dashboard",
      items: [
        {
          title: "Send Money",
          url: "/user/send-money",
          component:SendMoney
        },
        {
          title: "Request for Agent",
          url: "/user/request-for-agent",
          component:RequestForAgent
        },
       
        {
          title: "Cash Out",
          url: "/user/cash-out",
          component:CashOut
        },
      ],
    },
  ]
