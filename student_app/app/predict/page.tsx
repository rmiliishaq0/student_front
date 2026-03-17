import { Card } from "@/components/ui/card";
import PredictForm from "@/components/ui/PredictForm";
import PredictTitle from "@/components/ui/PredictTitle";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Predict(){
    return(
        <ScrollArea className="h-[calc(100vh-8.5rem)] bg-background  shadow-lg    mt-6 ">
           <Card className="flex gap-6 flex-col bg-white/5 backdrop-blur-2xl p-12 border border-white/10">
            <PredictTitle />
            <PredictForm />
            </Card>   
        </ScrollArea>
               
    )
}