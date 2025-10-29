import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminRoets";
import { userSidebarItems } from "./usersSidebarItems";
import { agentSidebarItems } from "./agentSideBar";
import GetTransHistory from "@/pages/GetTransHistory";
import { lazy } from "react";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";

const DashBoardLayout  = lazy(()=>import("@/components/layout/DashBoardLayout"))


export const router = createBrowserRouter([
    {

        Component: App,
        path: "/",
        children:[
            {
                Component:About,
                path:"about"
            },
              {
                path: "transaction",
                Component:withAuth(GetTransHistory)
              },
        ],

        

    },
    {
        Component:withAuth(DashBoardLayout,role.SUPER_ADMIN as TRole),
        path:"/admin",
        children:[{index:true,element:<Navigate to="/admin/getallUsers"/>},...generateRoutes(adminSidebarItems)]
    },
    {
        Component:withAuth(DashBoardLayout),
        path:"/user",
        children:[{index:true,element:<Navigate to="/user/send-money"/>},...generateRoutes(userSidebarItems)]
    },
    {
        Component:withAuth(DashBoardLayout),
        path:"/agent",
        children:[{index:true,element:<Navigate to="/agent/cashIn"/>},...generateRoutes(agentSidebarItems)]
    },
    {
        Component:Login,
        path:"login"
    },
    {
        Component:Register,
        path:"register"
    },
    {
        Component:Unauthorized,
        path:"unAuthorized"
    },
    
])