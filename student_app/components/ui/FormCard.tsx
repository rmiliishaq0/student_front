import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function FormCard({title,Logo,children, ...props}:{title:string,Logo:React.ReactNode,children:React.ReactNode,}){
    return(
        <div {...props} className="w-full">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex items-center gap-2 text-indigo-500">
                                {Logo}
                                <h2 className="text-lg">{title}</h2>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <Separator/>
                    <CardContent>
                        {children}
                    </CardContent>
                 </Card>
        </div>
    )
}