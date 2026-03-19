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
import {  Brain , RefreshCcw} from "lucide-react"
import { FormFields } from "@/utils/constantes"
import { useMutation } from "@tanstack/react-query"
import { predict } from "@/utils/api"
import { FieldError } from "./field"
import { toast } from "sonner"
import { useAuthStore } from "@/store/auth-store"
import { useEffect } from "react"
import { Spinner } from "./spinner"
import Score from "./ScoreDrawer"


export default function PredictForm(){
    const {setUser,user} =useAuthStore()
    const { mutate, error, isError, isPending ,reset} = useMutation({
        mutationFn:predict,
        onSuccess:(e)=>{
            setUser(e.user)
            toast.success(e?.message)
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : "An error occurred")
        },
    })
    const form = useForm<z.output<typeof formSchema>>({
        resolver: zodResolver(formSchema) ,
        defaultValues: {
            Age: user?.predictData?.Age || 15,
            Gender: user?.predictData?.Gender || "Other",
            AcademicLevel: user?.predictData?.AcademicLevel || "High School",
            PartTimeJob: user?.predictData?.PartTimeJob || "No",
            StudyHours: user?.predictData?.StudyHours || 0,
            SelfStudyHours: user?.predictData?.SelfStudyHours || 0,
            OnlineClassesHours: user?.predictData?.OnlineClassesHours || 0,
            FocusIndex: user?.predictData?.FocusIndex || 1,
            ProductivityScore: user?.predictData?.ProductivityScore || 1,
            SleepHours: user?.predictData?.SleepHours || 2,
            ExerciseMinutes: user?.predictData?.ExerciseMinutes || 0,
            CaffeineIntake: user?.predictData?.CaffeineIntake || 0,
            ScreenTimeHours: user?.predictData?.ScreenTimeHours || 0,
            SocialMediaHours: user?.predictData?.SocialMediaHours || 0,
            GamingHours: user?.predictData?.GamingHours || 0,
            InternetQuality: user?.predictData?.InternetQuality || "Average",
            UpcomingDeadline:user?.predictData?.UpcomingDeadline || "No",
            MentalHealthScore:user?.predictData?.MentalHealthScore || 1,
            BurnoutLevel:user?.predictData?.BurnoutLevel || 1
        }
      })
      useEffect(() => {
  if (user?.predictData) {
    form.reset({
      Age: user.predictData.Age,
      Gender: user.predictData.Gender,
      AcademicLevel: user.predictData.AcademicLevel,
      PartTimeJob: user.predictData.PartTimeJob,
      StudyHours: user.predictData.StudyHours,
      SelfStudyHours: user.predictData.SelfStudyHours,
      OnlineClassesHours: user.predictData.OnlineClassesHours,
      FocusIndex: user.predictData.FocusIndex,
      ProductivityScore: user.predictData.ProductivityScore,
      SleepHours: user.predictData.SleepHours,
      ExerciseMinutes: user.predictData.ExerciseMinutes,
      CaffeineIntake: user.predictData.CaffeineIntake,
      ScreenTimeHours: user.predictData.ScreenTimeHours,
      SocialMediaHours: user.predictData.SocialMediaHours,
      GamingHours: user.predictData.GamingHours,
      InternetQuality: user.predictData.InternetQuality,
      UpcomingDeadline: user.predictData.UpcomingDeadline,
      MentalHealthScore: user.predictData.MentalHealthScore,
      BurnoutLevel: user.predictData.BurnoutLevel
    })
  }
}, [user, form])
    function handleSubmit(data: z.infer<typeof formSchema>) {
        mutate(data)
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
        <motion.form variants={container} initial="hidden" whileInView="show" onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-6">
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
                                            reset={reset}
                                            isError={isError}
                                            field={field}
                                            fieldState={fieldState}
                                            label={f.label}
                                            min={f.min as number}
                                            max={f.max as number}
                                        />
                                        ) : (
                                        <SelectField
                                            reset={reset}
                                            isError={isError}
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
                                            reset={reset}
                                            isError={isError}
                                            field={field}
                                            fieldState={fieldState}
                                            label={f.label}
                                            min={f.min as number}
                                            max={f.max as number}
                                        />
                                        ) : (
                                        <SelectField
                                            reset={reset}
                                            isError={isError}
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
                                                    <SliderField reset={reset} isError={isError} field={field} fieldState={fieldState} label={f.label} min={f.min as number} max={f.max as number}  />
                                                ) : (
                                                    <SelectField reset={reset} isError={isError} field={field} fieldState={fieldState} label={f.label} placeholder={`Select ${f.label}`} Fields={f.options as string[]}  />
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
            {
                isError && <FieldError errors={[error]} />
            }
            <motion.div initial={{ opacity: 0 ,y:20 }} viewport={{ once: true }} whileInView={{ opacity: 1 ,y:0}} transition={{duration:0.5,ease:"easeOut"}} className="flex gap-4 items-center">
                <Button disabled={form.formState.isSubmitting || !form.formState.isValid  || isPending || isError} className="shadow-lg flex-1 p-5 bg-primary hover:bg-primary/80 text-white cursor-pointer self-end font-semibold">{
                isPending ? (
                  <Spinner/>
                ):(
                    user?.predictData?.isPredict
                    ? 
                    <>
                        <RefreshCcw className="h-5 w-5" /> 
                        <span>
                            Predict again
                         </span>
                    </>
                    : 
                    <>
                    <Brain className="h-5 w-5" /> 
                    <span>
                         Predict Exam Score
                    </span>
                </>
                )
              }</Button>
              {user?.predictData?.isPredict && <Score rawScore={user?.predictData?.score}/>}
            </motion.div>
        </motion.form>   
         )
}