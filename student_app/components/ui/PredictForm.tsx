"use client"
import { Button } from "@/components/ui/button"
import FormCard from "@/components/ui/FormCard"
import SelectField from "@/components/ui/SelectField"
import SliderField from "@/components/ui/SliderField"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { formSchema } from "@/utils/schemas"
import * as z from "zod";
import {motion} from "motion/react"
import {  Brain} from "lucide-react"
import { FormFields } from "@/utils/constantes"
export default function PredictForm(){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Age: 15,
            Gender: "Other",
            AcademicLevel: "High School",
            PartTimeJob: "No",
            StudyHours: 0,
            SelfStudyHours: 0,
            OnlineClassesHours: 0,
            FocusIndex: 1,
            ProductivityScore: 1,
            SleepHours: 2,
            ExerciseMinutes: 0,
            CaffeineIntake: 0,
            ScreenTimeHours: 0,
            SocialMediaHours: 0,
            GamingHours: 0,
            InternetQuality: "Average",
            UpcomingDeadline: "No",
            MentalHealthScore: 1,
            BurnoutLevel: 1
        }
      })
    function handleSubmit(data: z.infer<typeof formSchema>) {
        console.log("Submitting form with data:", data);
      }

    const container = {
        hidden: {},
        show: {
         transition: {
            
            staggerChildren: 0.2
        }
    }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }
  
    return(
        <motion.form variants={container} initial="hidden" animate="show" onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-6">
            { FormFields.map((i) => (
                <motion.div  key={i.name} variants={item}>
                    <FormCard  key={i.name} title={i.name} Logo={<i.logo className="h-5 w-5 text-indigo-500" />} >
                        {i.fields.length ===5 ?(
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-center gap-4 items-center">
                                {i.fields.slice(0, 2).map((f) => (
                                    <Controller
                                    key={f.name}
                                    control={form.control}
                                    name={f.name as keyof z.infer<typeof formSchema>}
                                    rules={{ required: true }}
                                    render={({ field, fieldState }) =>
                                        f.type === "slider" ? (
                                        <SliderField
                                            field={field}
                                            fieldState={fieldState}
                                            label={f.label}
                                            min={f.min as number}
                                            max={f.max as number}
                                        />
                                        ) : (
                                        <SelectField
                                            field={field}
                                            fieldState={fieldState}
                                            label={f.label}
                                            placeholder={`Select ${f.label}`}
                                            Fields={f.options as string[]}
                                        />
                                        )
                                    }
                                    />
                                ))}
                                </div>

                                <div className="flex justify-center gap-4 items-center">
                                {i.fields.slice(2).map((f) => (
                                    <Controller
                                    key={f.name}
                                    control={form.control}
                                    name={f.name as keyof z.infer<typeof formSchema>}
                                    rules={{ required: true }}
                                    render={({ field, fieldState }) =>
                                        f.type === "slider" ? (
                                        <SliderField
                                            field={field}
                                            fieldState={fieldState}
                                            label={f.label}
                                            min={f.min as number}
                                            max={f.max as number}
                                        />
                                        ) : (
                                        <SelectField
                                            field={field}
                                            fieldState={fieldState}
                                            label={f.label}
                                            placeholder={`Select ${f.label}`}
                                            Fields={f.options as string[]}
                                        />
                                        )
                                    }
                                    />
                                ))}
                                </div>

                            </div>
                        ) : (
                           <div className="grid grid-cols-2 gap-4 items-center justify-center place-content-center">
                                {
                                    i.fields.map((f) => (
                                        <Controller 
                                            key={f.name}
                                            control={form.control} 
                                            name={f.name as keyof z.infer<typeof formSchema>}
                                            rules={{required: true}}
                                            render={({field,fieldState}) => 
                                                f.type === "slider" ? (
                                                    <SliderField field={field} fieldState={fieldState} label={f.label} min={f.min as number} max={f.max as number}  />
                                                ) : (
                                                    <SelectField field={field} fieldState={fieldState} label={f.label} placeholder={`Select ${f.label}`} Fields={f.options as string[]}  />
                                                )
                                        } 
                                        />
                                    
                                    ))
                                }
                        </div>
                        )
                        }

                 </FormCard>
                </motion.div>
            ))}
            <Button disabled={form.formState.isSubmitting || !form.formState.isValid} className="shadow-lg w-full p-5 bg-primary hover:bg-primary/80 text-white cursor-pointer self-end font-semibold"><Brain className="h-5 w-5" /> Predict Exam Score</Button>
        </motion.form>   
         )
}