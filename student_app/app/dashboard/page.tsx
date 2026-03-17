import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard(){
    return(
         <ScrollArea className="h-[calc(100vh-8.5rem)] bg-background  shadow-lg    mt-6 ">
           <Card className="flex gap-6 flex-col bg-white/5 backdrop-blur-2xl p-12 border border-white/10">
                <div  className="mb-4 items-center flex gap-4 felx-wrap justify-between">
                <div className="gap-1 flex flex-col">
                    <h1 className="text-lg font-bold">Hello sa</h1>
                </div>
            </div>
            <Card className="shadow-lg">
                <CardHeader>
                        <CardTitle>
                            <h2 className="font-bold text-md">Overview</h2>
                        </CardTitle>
                    </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                    <div className="rounded-lg bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg p-4">
                        <h3 className="text-muted-foreground mb-1">Age</h3>
                        <p className=" font-bold text-xl">19</p>
                    </div>
                    <div className="rounded-lg bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg p-4">
                        <h3 className="text-muted-foreground mb-1">Age</h3>
                        <p className=" font-bold text-xl">19</p>
                    </div>
                    <div className="rounded-lg bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg p-4">
                        <h3 className="text-muted-foreground mb-1">Age</h3>
                        <p className=" font-bold text-xl">19</p>
                    </div>
                    <div className="rounded-lg bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg p-4">
                        <h3 className="text-muted-foreground mb-1">Age</h3>
                        <p className=" font-bold text-xl">19</p>
                    </div>
                </CardContent>
            </Card>
            </Card>   
        </ScrollArea>
    )
}