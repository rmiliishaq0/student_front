"use client"
import Link from "next/link";
import { Button } from "./button";
import { Login } from "./login";
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
                    <Link href={"/"}><Button {pathname == "/" ? 'className="cursor-pointer" variant={"outline"}'  : 'bg-primary border-white/10 cursor-pointer hover:bg-primary/80 transation text-white'} className="cursor-pointer" variant={"outline"} >Home</Button></Link>
                    <Link href={"/dachboard"}><Button className="cursor-pointer" variant={"outline"}>Dashboard</Button></Link>
                </div>
                <div className="flex gap-4">
                    <Login/>
                    <Link href={"/login"}><Button className="bg-transparent border-white/10 cursor-pointer hover:bg-primary transation text-white">Sign in</Button></Link>
                </div>
            </nav>
        </>
    )
}