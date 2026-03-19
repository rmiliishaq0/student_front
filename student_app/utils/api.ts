import { userSchemaZod } from "@/utils/schemas";
import { z } from "zod";
import { formSchema } from "@/utils/schemas";
export const connect = async ({
  email,
  password,
  confirmPassword,
}: z.infer<typeof userSchemaZod>) => {

  const response = await fetch(`/api/${confirmPassword?.trim()=="" ? "login" : "register"}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, confirmPassword }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}
export async function logOut(){
    const response = await fetch("/api/logout",{
      method: "POST"
    })
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
}
export async function predict(req:z.infer<typeof formSchema>){
  const response = await fetch("/api/predict",{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body:JSON.stringify(req)
  }) 
  const data = await response.json()
  if(!response.ok){
    throw new Error(data.message || "Request failed")
  }
  return data
}