import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken";
export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/?login=true", req.url))
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!)
  } catch {
    return NextResponse.redirect(new URL("/?login=true", req.url))
  }

  return NextResponse.next()

}

export const config = {
  matcher: ["/dashboard/:path*", "/predict/:path*"],
}