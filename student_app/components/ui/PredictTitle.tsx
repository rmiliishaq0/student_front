"use client"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
export default function PredictTitle(){
    const {user} = useAuthStore()
    const trans = useTranslations("Predict")
    const route=useRouter()
    return(
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4 items-center flex gap-4 felx-wrap justify-between">
                <div className="gap-1 flex flex-col">
                    <h1 className="text-3xl font-bold">{trans("PredictTitle")}</h1>
                    <p className="text-muted-foreground mt-1">{trans("PredictSub")}</p>
                </div>
                {
                    !user?.predictData?.isPredict && <div>
                    <Button onClick={()=>{route.push("/dashboard")}} className="cursor-pointer" variant={"outline"}>{trans("Skip")}</Button>
                </div>
                }
        </motion.div>
    )
}