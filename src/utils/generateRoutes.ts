import type { ISidebarItems } from "@/types";


export const generateRoutes = (sidebarItem:ISidebarItems[]) =>{

    return sidebarItem.flatMap((section)=>section.items.map((route)=>({
        path: route.url,
        Component:route.component
    })))

}