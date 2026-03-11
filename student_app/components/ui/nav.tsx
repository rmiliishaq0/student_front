"use client"
import Link from "next/link";
import { Button } from "./button";
import { ConnectForm } from "./connectForm";
import { usePathname } from "next/navigation";

export default function Nav(){
    const pathname = usePathname()
    return(
        <>
            <nav className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-8  shadow-lg flex gap-4 items-center justify-between p-4">
                <div>
                    <Link href={"/"} className="text-white text-xl font-bold">ScorePredict</Link>
                </div>
                <div className="flex gap-4">
                <Link href="/">
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
                <Link href={"/predict"}><Button className={`cursor-pointer ${
                    pathname == "/predict"
                        ? "bg-primary hover:bg-primary/80 text-white"
                        : ""
                    }`}   variant={pathname == "/predict" ? "default" : "outline"}>Predict</Button></Link>                
                <Link href={"/dashboard"}><Button className={`cursor-pointer ${
                    pathname == "/dashboard"
                        ? "bg-primary hover:bg-primary/80 text-white"
                        : ""
                    }`}   variant={pathname == "/dashboard" ? "default" : "outline"}>Dashboard</Button></Link>
                </div>
                <div className="flex gap-4">
                    <ConnectForm title="Create account" type="register"/>
                    <ConnectForm title="Sign in" type="login"/>

                    {/*    
                   <Link href={"/login"}><Button className="bg-transparent border-white/10 cursor-pointer hover:bg-primary transation text-white">Sign in</Button></Link>
                   */}
                </div>
            </nav>
        </>
    )
}