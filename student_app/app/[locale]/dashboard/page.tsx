import { ScrollArea } from "@/components/ui/scroll-area";
import DachboardContent from "@/components/ui/DachboardContent";
export default function Dashboard(){
    
    return(
         <ScrollArea className="h-[calc(100vh-8.5rem)] bg-background  shadow-lg    mt-6 ">
           <DachboardContent/>
        </ScrollArea>
    )
}