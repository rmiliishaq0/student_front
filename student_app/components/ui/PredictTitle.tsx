"use client"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
export default function PredictTitle(){
    const {user} = useAuthStore()
    return(
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4 items-center flex gap-4 felx-wrap justify-between">
                <div className="gap-1 flex flex-col">
                    <h1 className="text-3xl font-bold">Predict Exam Score</h1>
                    <p className="text-muted-foreground mt-1">Fill in the details below for an AI-powered prediction.</p>
                </div>
                {
                    !user?.predictData?.isPredict && <div>
                    <Button className="cursor-pointer" variant={"outline"}>Skip</Button>
                </div>
                }
        </motion.div>
    )
}