import * as z from "zod"; 
import { ControllerRenderProps, ControllerFieldState } from "react-hook-form"
import { formSchema } from "@/utils/schemas";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectField({
  field,
  fieldState,
  label,
  placeholder,
  Fields,
  isError,
  reset
}: {
  field: ControllerRenderProps<z.infer<typeof formSchema>, any>
  fieldState: ControllerFieldState
  label: string
  placeholder: string
  Fields: string[],
  isError:boolean,
  reset:()=>void,
}) {
  return (
    <Field data-invalid={fieldState.invalid || isError}>
      <FieldLabel>{label}</FieldLabel>

      <Select
        value={field.value}
        onValueChange={(e)=>{field.onChange(e);reset()}}
      >
        <SelectTrigger aria-invalid={fieldState.invalid || isError}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {Fields.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

    </Field>
  )
}