import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { connectDB } from "@/lib/mongodb"
import User from "@/model/User"
import jwt from "jsonwebtoken";
export async  function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/?login=true", req.url))
  }
  let userId: string
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
    userId = data.userId
  } catch {
    return NextResponse.redirect(new URL("/?login=true", req.url))
  }
  await connectDB()
  
      const user = await User.findById(userId)
  
      if (!user) {
        return NextResponse.redirect(new URL("/?login=true", req.url))
      }
  

  return NextResponse.next()

}

export const config = {
  matcher: ["/dashboard/:path*", "/predict/:path*"],
}