import * as z from "zod"; 
import { ControllerRenderProps, ControllerFieldState } from "react-hook-form"
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Slider } from "./slider"
import { formSchema } from "@/utils/schemas";
export default function SliderField({field,fieldState,label,min,max,isError,reset}:{field: ControllerRenderProps<z.infer<typeof formSchema>,any>,fieldState: ControllerFieldState,label:string,min:number,max:number,isError:boolean,reset:()=>void}){
    return(
        <Field data-invalid={fieldState.invalid || isError}>
            <div className="flex justify-between">
            <FieldLabel htmlFor="name">{label}</FieldLabel>
            <span aria-invalid={fieldState.invalid|| isError} className={`text-sm font-mono text-muted-foreground ${fieldState.invalid || isError ? "text-red-400" : ""}`}>
                {field.value ?? min}
             </span>            
             </div>
             <Slider
                min={min}
                max={max}
                step={1}
                value={[field.value ?? min]}
                onValueChange={([value]) => {field.onChange(value);reset()}}
             />
         </Field>
    )
}