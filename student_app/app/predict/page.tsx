import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Brain } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function Predict(){
    return(
        <div className="min-h-screen container m-12 flex gap-6 flex-col">
            <div className="mb-4 items-center flex gap-4 felx-wrap justify-between">
                <div className="gap-1 flex flex-col">
                    <h1 className="text-3xl font-bold">Predict Exam Score</h1>
                    <p className="text-muted-foreground mt-1">Fill in the details below for an AI-powered prediction.</p>
                </div>
                <div>
                    <Button className="cursor-pointer" variant={"outline"}>Skip</Button>
                </div>
            </div>
            <div className="w-full">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div className="flex items-center gap-2 text-indigo-500">
                                <Brain/>
                                <h2 className="text-lg">Student Information</h2>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <Separator/>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-center gap-4 items-center">
                                <Field>
                                    <FieldLabel htmlFor="name">Age</FieldLabel>
                                    <Slider defaultValue={[0]} max={1} step={1} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="name">Gender</FieldLabel>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectItem value="light">Light</SelectItem>
                                            <SelectItem value="dark">Dark</SelectItem>
                                            <SelectItem value="system">System</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>
                            <div className="flex justify-center gap-4 items-center">
                                <Field>
                                    <FieldLabel htmlFor="name">Academic Level</FieldLabel>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectItem value="light">Light</SelectItem>
                                            <SelectItem value="dark">Dark</SelectItem>
                                            <SelectItem value="system">System</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="name">Part Time Job</FieldLabel>
                                    <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
                                </Field>
                            </div>
                        </div>
                    </CardContent>
                 </Card>
            </div>
            
            <Button className="w-full p-5 bg-primary hover:bg-primary/80 text-white cursor-pointer self-end font-semibold"><Brain className="h-5 w-5" /> Predict Exam Score</Button>
        </div>
    )
}