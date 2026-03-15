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
  Fields
}: {
  field: ControllerRenderProps<z.infer<typeof formSchema>, any>
  fieldState: ControllerFieldState
  label: string
  placeholder: string
  Fields: string[]
}) {
  return (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel>{label}</FieldLabel>

      <Select
        value={field.value}
        onValueChange={field.onChange}
      >
        <SelectTrigger aria-invalid={fieldState.invalid}>
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