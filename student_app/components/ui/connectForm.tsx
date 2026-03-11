"use client"
import { Button } from "@/components/ui/button"
import * as z from "zod"; 
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel ,FieldError} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { useState } from "react";



export function ConnectForm({title,type}:{title:string,type:"login"|"register"}) { 
      const [open, setOpen] = useState(false)
      const route = useRouter()
      let userSchema = z.object({
      email: z.email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters long"),
      confirmPassword: type === "register"
        ? z.string().min(6, "Passwords don't match")
        : z.string().optional(),
    })

    if (type === "register") {
      userSchema = userSchema.refine(
        (data) => data.password === data.confirmPassword,
        {
          message: "Passwords don't match",
          path: ["confirmPassword"],
        }
      )
    }
    const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function handleSubmit(data: z.infer<typeof userSchema>) {
    console.log("Submitting form with data:", data);
    // connect to backend and create account or login
    setOpen(false)
    route.push("/predict")
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form id="form-rhf-demo" onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
        <DialogTrigger asChild>
          <Button variant={type=="login"?"outline":"default"} className={`cursor-pointer ${type=="login"?"":"bg-primary hover:bg-primary/80 text-white"} `} >
            {title}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader className="mt-2">
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <hr></hr>
          <FieldGroup>
            <Controller name="email"
            control={form.control}
            render={({field,fieldState})=>(
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="example@example.com"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    required
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
              </Field>
            )}/>
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input 
                    {...field} 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    required
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}/>
            {type === "register" && (
              <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                <Input 
                  {...field} 
                  aria-invalid={fieldState.invalid}
                  autoComplete="off" 
                  id="confirm-password" 
                  type="password" 
                  placeholder="••••••••"
                  required
                />
                {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
              </Field>
              )}/>
            )}
          </FieldGroup>
          <DialogFooter>
            <Button type="submit" form="form-rhf-demo" disabled={!form.formState.isValid} className="bg-primary hover:bg-primary/80 text-white cursor-pointer" >{title}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
