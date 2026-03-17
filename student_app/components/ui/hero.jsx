"use client"
import { Sparkles ,Brain,ArrowRight,BarChart3} from "lucide-react"
import { motion } from "motion/react"
import { Button } from "./button"
import { useRouter } from 'next/navigation'

export default function Hero(){
    const router = useRouter()
    return(
        <motion.div initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}} className="z-10 flex flex-col items-center justify-center py-20 relative">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
            <div className="flex items-center justify-center flex-col gap-6">
                <div className="glow inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black px-4 py-1.5 text-sm text-indigo-600">
                <Sparkles/>
                Powered by Machine Learning
            </div>
            <h1 className="text-center text-5xl sm:text-7xl font-bold tracking-tight leading-tight text-white">
                Student Exam
            <br />
            <span className="text-center text-gradient text-white/90">Score Predictor</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl text-center">
                Predict exam performance using AI analysis of study habits, lifestyle patterns, and mental wellness indicators.
            </p>
            </div>
            <Button onClick={()=>{router.push("/predict")}} size="lg" className="text-white p-5 gap-2 z-30 cursor-pointer mt-10 glow">
                <Brain className="h-5 w-5" /> Start Prediction <ArrowRight className="h-4 w-4" />
            </Button>
        </motion.div>
    )
}