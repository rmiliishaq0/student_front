import { formSchema } from "@/utils/schemas";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import  jwt  from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb"
import User from "@/model/User";
import {predictApi} from "@/utils/api"

export async function POST(req:Request) {
    try{
        const cookieStore = await cookies()
        const token = cookieStore.get("token")?.value
        const data = await req.json()
    if(!token){
        return NextResponse.json({ error: "Not logged in" }, { status: 401 })
    }
    let userId: string
    try{
        const decoded  = jwt.verify(token,process.env.JWT_SECRET!) as { userId: string }
        userId=decoded .userId
    }catch{
        return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }
    const parsed = formSchema.safeParse(data)
    if(!parsed.success){
        return NextResponse.json({ message: "Invalid input"}, { status: 400 });
    }
    const validatedData = parsed.data;
    let score: number
    try {
      const { result } = await predictApi(validatedData)
      score = result[0]
    } catch (err) {
      return NextResponse.json(
        { error: "Prediction service failed" },
        { status: 502 } 
      )
    }

    await connectDB()
    
    const user = await User.findByIdAndUpdate(
  userId,
  {
    $set: {
      predictData: {
        ...validatedData,
        score: Number(score).toFixed(2),
        isPredict: true
      }
    }
  },
  { new: true }
).select("-password -__v");
    
    if (!user) {
        return NextResponse.json({ error: "Not logged in" }, { status: 401 })
    }

    return NextResponse.json({message: "Predict registered successfully",
  user: {
    id: user._id,
    email: user.email,
    predictData: user.predictData
  }
}, { status: 201 });

    }catch{
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}