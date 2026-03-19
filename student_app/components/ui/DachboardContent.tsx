"use client"
import { useAuthStore } from "@/store/auth-store";
import { z } from "zod"
import { formSchema } from "@/utils/schemas"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScoreChart from "./ScoreChart";
import { Button } from "./button";
import { RefreshCcw} from "lucide-react"
import Link from "next/link";
import {motion} from "motion/react"

const schema = formSchema.extend({score:z.number()})
type PredictData = z.infer<typeof schema>
export default function DachboardContent(){
    const {user} = useAuthStore()
    const predictData: PredictData | undefined = user?.predictData
    const email = user?.email
   const list = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
}
    return(
       <Card className=" bg-white/5 backdrop-blur-2xl p-12 border border-white/10">
            <CardHeader>
                <CardTitle>
                     <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{ duration: 0.5,ease: "easeOut" }} className="mb-2 text-xl font-bold">Hello {email?.slice(0,email.indexOf("@"))}</motion.h1>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-6 flex-col">
                <motion.div initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} transition={{ duration: 0.6,ease: "easeOut" }}>
                    <Card className="shadow-lg">
                 <CardContent >
                        <div className="mt-4  flex justify-center items-center flex-col">
                            <h2 className="text-lg mb-1 font-bold">Your Performance</h2>
                            <p className="text-muted-foreground">This is your calculated productivity score.</p>
                            <ScoreChart rawScore={predictData?.score}/>
                        </div>
                </CardContent>
            </Card>
                </motion.div>
            <motion.div initial="hidden"
                animate="visible"
                variants={list}>
                <Card className="shadow-lg">
                <CardHeader>
                        <CardTitle>
                            <motion.h2 variants={item} className="font-bold text-lg my-4">Your Information</motion.h2>
                        </CardTitle>
                    </CardHeader>
                 <CardContent className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 items-center ">
                    {predictData &&
                        Object.entries(predictData).map(([key, value]) => (
                            key != "score" &&  key != "isPredict"  && (
                            <motion.div variants={item} key={key} className=" items-center justify-center rounded-lg bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg p-4">
                                <h3 className="text-muted-foreground mb-1">{key}</h3>
                                <p className=" font-bold text-xl">{value}</p>
                            </motion.div>
                            )
                        ))}
                </CardContent>
            </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0 ,y:20 }} viewport={{ once: true }} whileInView={{ opacity: 1 ,y:0}} transition={{duration:0.5,ease:"easeOut"}}>
                <Link href={"/predict"}>
                        <Button  className="w-full shadow-lg p-5 bg-primary hover:bg-primary/80 text-white cursor-pointer self-end font-semibold">
               
                        <RefreshCcw className="h-5 w-5" /> 
                        <span>
                            Predict again
                         </span>
            </Button>
            </Link>
            </motion.div>
            </CardContent>
        </Card>   
    )
}