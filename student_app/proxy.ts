import type { NextRequest } from "next/server"
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb"
import User from "@/model/User"
import jwt from "jsonwebtoken";
import createMiddleware from 'next-intl/middleware';
import { routing } from "./i18n/routing";


export async  function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  if(pathname.startsWith("/dashboard") || pathname.startsWith("/predict")){
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
  }
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(req);
  return response
}
  
export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"]
};