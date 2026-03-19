import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { connectDB } from "@/lib/mongodb"
import User from "@/model/User"
export async function GET() {
  try {

    const cookieStore = await cookies()
    const token =  cookieStore.get("token")?.value

    if (!token) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 })
    }

    let userId: string

    try {
      const data = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
      userId = data.userId
    } catch {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    await connectDB()

    const user = await User.findById(userId).select("-password -__v")

    if (!user) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 })
    }

    return NextResponse.json({user})

  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}