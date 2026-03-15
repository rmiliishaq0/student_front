import PredictForm from "@/components/ui/PredictForm";
import PredictTitle from "@/components/ui/PredictTitle";


export default function Predict(){
    return(
        <div className=" h-[calc(100vh-8rem)] p-6 container m-6 flex gap-6 flex-col overflow-auto">
            <PredictTitle />
            <PredictForm />
        </div>
    )
}