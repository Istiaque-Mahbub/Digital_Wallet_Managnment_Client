import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminRoets";
import { agentSidebarItems } from "@/routes/agentSideBar";
import { userSidebarItems } from "@/routes/usersSidebarItems";
import type { TRole } from "@/types";


export const getSidebarItems = (UserRole:TRole) =>{

    switch (UserRole) {
        case role.SUPER_ADMIN:
            
            return [...adminSidebarItems,...userSidebarItems,...agentSidebarItems];

        case role.ADMIN:
            
            return [...adminSidebarItems];

        case role.USER:
            
            return [...userSidebarItems];
        
    
        case role.USER:
            
            return [...agentSidebarItems];
    
        default:
            return [];
    }

}