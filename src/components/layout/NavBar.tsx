
import Logo from "@/assets/icons/Logo"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ModeToggle } from "./ModeToggoler"
import { Link } from "react-router"
import { authApi, useLogoutMutation, useUserQuery } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"
import { useAppDispatch } from "@/redux/hook"
import { role } from "@/constants/role"
import React from "react"
import { cn } from './../../lib/utils';

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", role:"PUBLIC"},
  { href: "/about", label: "About", role:"PUBLIC" },
  { href: "/transaction", label: "Transaction Details", role:"PUBLIC"},
  { href: "/admin", label: "Dashboard",role:role.SUPER_ADMIN  },
  { href: "/user", label: "Dashboard",role:role.USER  },
  { href: "/agent", label: "Dashboard",role:role.AGENT },
]

export default function NavBar() {

  const {data} = useUserQuery(undefined)
 const [logout] = useLogoutMutation()
 console.log(data)
 console.log(data?.data?.wallet?.balance)
const dispatch = useAppDispatch()
  const handleLogout = async() =>{
     try {
      const result = await logout(undefined).unwrap()
      if(result.success){
        dispatch(authApi.util.resetApiState())
        toast.success("Logout successfully")
      }
     console.log(result)
     } catch (error) {
      console.log(error)
      toast.error("Something went wrong!!!! Please try again")
     }
  }

  return (
    <header className="border-b px-4 md:px-6">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <React.Fragment key={index}>
                    {link.role === "PUBLIC" &&
                      <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                      asChild
                        className="py-1.5"
                       
                      >
                        <Link to={link.href}>
                        {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    }
                    {link.role === data?.data?.role &&
                      <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                      asChild
                        className="py-1.5"
                       
                      >
                        <Link to={link.href}>
                        {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    }
                    </React.Fragment>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                   <React.Fragment key={index}>
                   {link.role === "PUBLIC"  &&
                     <NavigationMenuItem key={index} className="w-full">
                     <NavigationMenuLink
                     asChild
                       className="py-1.5"
                      
                     >
                       <Link to={link.href}>
                       {link.label}
                       </Link>
                     </NavigationMenuLink>
                   </NavigationMenuItem>
                   }
                   {link.role === data?.data?.role  &&
                     <NavigationMenuItem key={index} className="w-full">
                     <NavigationMenuLink
                     asChild
                       className="py-1.5"
                      
                     >
                       <Link to={link.href}>
                       {link.label}
                       </Link>
                     </NavigationMenuLink>
                   </NavigationMenuItem>
                   }
                   </React.Fragment>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
        {
          data?.data?.role === role.SUPER_ADMIN
          &&data?.data?.adminCommission && <p>Admin Commission: <span className={cn("font-bold" ,data?.data?.adminCommission > 10 ? "text-blue-500" : "text-red-500" )}> ${data?.data?.adminCommission}</span> </p>
        }
        {
          data?.data?.role === role.USER
          &&data?.data?.wallet?.balance && <p>Balance: <span className={cn("font-bold" ,data?.data?.wallet?.balance > 10 ? "text-blue-500" : "text-red-500" )}>${data?.data?.wallet?.balance}</span> </p>
        }
        {
          data?.data?.role === role.AGENT
          &&data?.data?.wallet?.agentMoney && <p>Agent Balance: <span className={cn("font-bold" ,data?.data?.wallet?.balance > 10 ? "text-blue-500" : "text-red-500" )}>${data?.data?.wallet?.agentMoney}</span> </p>
        }
          <ModeToggle/>
          {data?.data?.email ? (
            <Button onClick={handleLogout} variant="outline" size="sm" className="text-sm">
            Logout
          </Button>
          ) : (
  <Button asChild size="sm" className="text-sm">
    <Link to="/login">Login</Link>
  </Button>
)}
        </div>
      </div>
    </header>
  )
}
