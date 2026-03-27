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
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState,useMemo } from "react";
import { userSchemaZod } from "@/utils/schemas";
import { useMutation } from "@tanstack/react-query";
import { connect } from "@/utils/api";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth-store";
import { Spinner } from "./spinner";
import { useTranslations } from "next-intl";
export function ConnectForm({
  title,
  type,
}: {
  title: string
  type: "login" | "register"
}) {
  const trans = useTranslations("Connection")
  const {setUser } = useAuthStore()
  const { mutate, error, isError, isPending, reset } = useMutation({
  mutationFn: connect,
  onSuccess: (data) => {
    setUser(data?.user)
    setOpenForm(false)
    router.push("/predict")

    toast.success(
      isRegister
        ? trans("RegisterMsg")
        : trans("LoginMsg")
    )
  },
  onError: (error) => {
    toast.error(error instanceof Error ? error.message : "An error occurred")
  },
  })  
  const searchParams = useSearchParams()
  const router = useRouter()

  const [openForm, setOpenForm] = useState(false)

  const isRegister = type === "register"

  const userSchema = useMemo(() => {
    const base = userSchemaZod

    if (isRegister) {
      return base.refine((data) => data.password === data.confirmPassword, {
        message: trans("PassErr"),
        path: ["confirmPassword"],
      })
    }

    return base
  }, [isRegister])


  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  
  useEffect(() => {
    if (type === "login") {
      setOpenForm(!!searchParams.get("login"))
    }
  }, [searchParams, type])


 
  function handleSubmit(d: z.infer<typeof userSchema>) {
    mutate(d)
  }
  return (
    <>
       <Dialog
      open={openForm}
      onOpenChange={(open) => {
        if (!open) router.push("/")
        setOpenForm(open)
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant={type === "login" ? "outline" : "default"}
          className={`cursor-pointer ${
            type === "login"
              ? ""
              : "bg-primary hover:bg-primary/80 text-white"
          }`}
        >
          {trans(title)}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader className="mt-2">
          <DialogTitle>{trans(title)}</DialogTitle>
        </DialogHeader>

        <hr />

        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-6"
        >
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid || isError}>
                  <FieldLabel htmlFor="email">{trans("Email")}</FieldLabel>

                  <Input
                    value={field.value}
                    onChange={(e)=>{field.onChange(e);reset()}}
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    aria-invalid={fieldState.invalid || isError}
                    autoComplete="off"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid || isError}>
                  <FieldLabel htmlFor="password">{trans("Password")}</FieldLabel>

                  <Input
                    value={field.value}
                    onChange={(e)=>{field.onChange(e);reset()}}
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    aria-invalid={fieldState.invalid || isError}
                    autoComplete="off"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {isRegister && (
              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid || isError}>
                    <FieldLabel htmlFor="confirm-password">
                      {trans("ConfirmPassword")}
                    </FieldLabel>

                    <Input
                      value={field.value}
                      onChange={(e)=>{field.onChange(e);reset()}}
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      aria-invalid={fieldState.invalid || isError}
                      autoComplete="off"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            )}
            {
                    isError && (
                      <FieldError className="-my-1.25" errors={[error]} />
                    )
                  }
          </FieldGroup>

          <DialogFooter>
            <Button
              type="submit"
              disabled={!form.formState.isValid || isPending || isError }
              className="bg-primary hover:bg-primary/80 text-white cursor-pointer "
            >
              {
                isPending ? (
                  <Spinner/>
                ):(
                  trans(title)
                )
              }
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </>
  )
}