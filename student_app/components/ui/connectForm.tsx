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
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef, useState } from "react";

export function ConnectForm({title,type}:{title:string,type:"login"|"register"}) { 
  const [btnStatus,setBtnStatus] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const userSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
    confirmPassword: type === "register" ? z.string().min(6) : z.string().optional(),
  })
  type === "register" && userSchema.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match", 
    path: ["confirm"], 
  });
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = userSchema.safeParse(formData);
    if (result.success) {
      // connect to backend and create account or login
      console.log("Form data is valid:", result.data);
    } else {
      console.log("Form data is invalid:", result.error);
      setBtnStatus(true)
    }
  }
  return (
    <Dialog>
      <form>
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
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input value={formData.email} onChange={(e)=>{setBtnStatus(false); setFormData({...formData,email:e.target.value})}} type="email" id="email" name="email" placeholder="example@example.com" />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input value={formData.password} onChange={(e)=>{setBtnStatus(false); setFormData({...formData,password:e.target.value})}} id="password" type="password" placeholder="••••••••" />
            </Field>
            {type === "register" && (
              <Field>
                <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                <Input value={formData.confirmPassword} onChange={(e)=>{setBtnStatus(false); setFormData({...formData,confirmPassword:e.target.value})}} id="confirm-password" type="password" placeholder="••••••••" />
              </Field>
            )}
          </FieldGroup>
          <DialogFooter>
            <Button onClick={handleSubmit} disabled={btnStatus || (type === "login" ? (formData.email && formData.password ? false : true) : (formData.email && formData.password && formData.confirmPassword ? false : true))} className="bg-primary hover:bg-primary/80 text-white cursor-pointer" type="submit">{title}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
