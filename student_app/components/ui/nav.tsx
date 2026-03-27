"use client"
import Link from "next/link";
import { Button } from "./button";
import { ConnectForm } from "./connectForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useAuthStore } from "@/store/auth-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import {
  LogOutIcon,
} from "lucide-react"
import { useMutation } from "@tanstack/react-query";
import { logOut } from "@/utils/api";
import { toast } from "sonner";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import English from '../../public/united-kingdom.png'
import Frensh from "../../public/france.png"
import {useLocale} from 'next-intl';
import { useRouter, usePathname } from "@/i18n/navigation";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react"

export default function Nav(){
    const trans = useTranslations("Nav")
    const locale = useLocale();
    console.log(locale)
    const {isAuthenticated,user,logout} = useAuthStore()
    const router = useRouter()
    const { mutate} = useMutation({
        mutationFn:logOut,
        onSuccess(data) {
            logout()            
            toast.success(data?.message)
            router.push("/")
        },
        onError(error) {
            toast.error(error instanceof Error ? error.message : "An error occurred")
        },
    })
    const pathname = usePathname()
    function handelLogOut(){
        mutate()
    }

    const changeLang = (locale: string) => {
        router.replace(pathname, { locale }); 
    };
    return(
            <AnimatePresence>
                <nav className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-8  shadow-lg flex gap-4 items-center justify-between p-4">
                <div>
                    <Link href={"/"} className="text-white text-xl font-bold">ScorePredict</Link>
                </div>
                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 } } transition={{ duration: 0.6,ease: "easeOut" }} className="flex gap-4">
                <Link className="max-sm:hidden" href="/">
                    <Button
                        variant={pathname == "/"?"default":"outline"}
                        className={`cursor-pointer ${
                        pathname == "/"
                            ? "bg-primary hover:bg-primary/80 text-white"
                            : ""
                        }`} 
                    >
                        {trans("Home")}
                    </Button>
                </Link>    
                <Link  href={"/predict"}><Button className={`max-sm:hidden cursor-pointer ${
                    pathname == "/predict"
                        ? "bg-primary hover:bg-primary/80 text-white"
                        : ""
                    }`}   variant={pathname == "/predict" ? "default" : "outline"}>{trans("Predict")}</Button></Link>                
                <Link href={"/dashboard"}><Button className={`max-sm:hidden cursor-pointer ${
                    pathname == "/dashboard"
                        ? "bg-primary hover:bg-primary/80 text-white"
                        : ""
                    }`}   variant={pathname == "/dashboard" ? "default" : "outline"}>{trans("Dashboard")}</Button></Link>
                </motion.div>
                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 } }  className="flex gap-4 items-center justify-center">
                    <DropdownMenu >
                                <DropdownMenuTrigger className="max-sm:hidden" asChild>
                                    <Avatar size="lg">
                                        <AvatarFallback className="text-white "><Image className="p-0.5" src={locale=="fr" ?Frensh : English}  alt="lang"/></AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent  align="end">
                                        <DropdownMenuCheckboxItem
                                            checked={locale == "en"}
                                            onCheckedChange={()=>{changeLang("en")}}
                                        >
                                            English
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem
                                            checked={locale == "fr"}
                                            onCheckedChange={()=>{changeLang("fr")}}
                                        >
                                            French
                                        </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                                </DropdownMenu>  

                    {
                        isAuthenticated 
                        ? 
                        <>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar size="lg">
                                        <AvatarFallback  className="text-white">{user?.email.slice(0,2).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem className="sm:hidden" onClick={()=>router.push("/dashboard")}>
                                            {trans("Home")}
                                    </DropdownMenuItem>
                                     <DropdownMenuItem className="sm:hidden" onClick={()=>{router.push("/predict")}}>
                                            {trans("Predict")}
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="sm:hidden" />
                                    <DropdownMenuItem onClick={handelLogOut} variant="destructive">
                                        <LogOutIcon />
                                        {trans("Logout")}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>              
                        </>
                        : 
                        <>
                            <ConnectForm  title="CreateAccount" type="register"/>
                            <ConnectForm  title="SignIn" type="login"/>
                         </>
                    }
                
                    {/*    
                   <Link href={"/login"}><Button className="bg-transparent border-white/10 cursor-pointer hover:bg-primary transation text-white">Sign in</Button></Link>
                   */}
                </motion.div>
            </nav>
            </AnimatePresence>
    )
}