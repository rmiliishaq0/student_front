"use client"
import Link from "next/link";
import { Button } from "./button";
import { ConnectForm } from "./connectForm";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuthStore } from "@/store/auth-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import {
  LogOutIcon,
} from "lucide-react"
import { useMutation } from "@tanstack/react-query";
import { logOut } from "@/utils/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Nav(){
    const {isAuthenticated,user,logout} = useAuthStore()
    const router = useRouter()
    const { mutate, error, isError, isPending, reset } = useMutation({
        mutationFn:logOut,
        onSuccess(data, variables, onMutateResult, context) {
            logout()            
            toast.success(data?.message)
            router.push("/")
        },
        onError(error, variables, onMutateResult, context) {
            toast.error(error instanceof Error ? error.message : "An error occurred")
        },
    })
    const pathname = usePathname()
    function handelLogOut(){
        mutate()
    }
    return(
            <nav className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-8  shadow-lg flex gap-4 items-center justify-between p-4">
                <div>
                    <Link href={"/"} className="text-white text-xl font-bold">ScorePredict</Link>
                </div>
                <div className="flex gap-4">
                <Link className="max-sm:hidden" href="/">
                    <Button
                        variant={pathname == "/"?"default":"outline"}
                        className={`cursor-pointer ${
                        pathname == "/"
                            ? "bg-primary hover:bg-primary/80 text-white"
                            : ""
                        }`} 
                    >
                        Home
                    </Button>
                </Link>    
                <Link  href={"/predict"}><Button className={`max-sm:hidden cursor-pointer ${
                    pathname == "/predict"
                        ? "bg-primary hover:bg-primary/80 text-white"
                        : ""
                    }`}   variant={pathname == "/predict" ? "default" : "outline"}>Predict</Button></Link>                
                <Link href={"/dashboard"}><Button className={`max-sm:hidden cursor-pointer ${
                    pathname == "/dashboard"
                        ? "bg-primary hover:bg-primary/80 text-white"
                        : ""
                    }`}   variant={pathname == "/dashboard" ? "default" : "outline"}>Dashboard</Button></Link>
                </div>
                <div className="flex gap-4">
                    {
                        isAuthenticated 
                        ? 
                        <>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar size="lg">
                                        <AvatarFallback className="text-white">{user?.email.slice(0,2).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem className="sm:hidden" onClick={()=>router.push("/dashboard")}>
                                            Dashboard
                                    </DropdownMenuItem>
                                     <DropdownMenuItem className="sm:hidden" onClick={()=>{router.push("/predict")}}>
                                            Predict
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="sm:hidden" />
                                    <DropdownMenuItem onClick={handelLogOut} variant="destructive">
                                        <LogOutIcon />
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>              
                        </>
                        : 
                        <>
                            <ConnectForm  title="Create account" type="register"/>
                            <ConnectForm  title="Sign in" type="login"/>
                         </>
                    }
                    {/*    
                   <Link href={"/login"}><Button className="bg-transparent border-white/10 cursor-pointer hover:bg-primary transation text-white">Sign in</Button></Link>
                   */}
                </div>
            </nav>
    )
}