import type { ISidebarItems } from "@/types";
import { lazy } from "react";

const GetAllTransactions  = lazy(()=>import("@/pages/Admin/GetAllTransactions"))
const GetAllUsers  = lazy(()=>import("@/pages/Admin/GetAllUsers"))


export const adminSidebarItems:ISidebarItems[] = [
    {
      title: "Dashboard",
      items: [
        {
          title: "All Users Data",
          url: "/admin/getallUsers",
          component:GetAllUsers
        },
        {
          title: "All Transactions List",
          url: "/admin/getAllTransaction",
          component:GetAllTransactions
        },
      ],
    },
  ]
