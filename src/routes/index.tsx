import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminRoets";
import { userSidebarItems } from "./usersSidebarItems";
import { agentSidebarItems } from "./agentSideBar";
import Update from "@/pages/Update";
import GetTransHistory from "@/pages/GetTransHistory";
import { lazy } from "react";

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
                path: "update-profile",
                Component:Update
              },
              {
                path: "transaction",
                Component:GetTransHistory
              },
        ],

        

    },
    {
        Component:DashBoardLayout,
        path:"/admin",
        children:[{index:true,element:<Navigate to="/admin/getallUsers"/>},...generateRoutes(adminSidebarItems)]
    },
    {
        Component:DashBoardLayout,
        path:"/user",
        children:[{index:true,element:<Navigate to="/user/send-money"/>},...generateRoutes(userSidebarItems)]
    },
    {
        Component:DashBoardLayout,
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
    
])