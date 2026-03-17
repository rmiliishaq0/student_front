import { userSchemaZod } from "@/utils/schemas";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export  async function POST(req: Request) {
    try{
        const { email, password ,confirmPassword} = await req.json();
        const schema = userSchemaZod.refine((data) => data.password === data.confirmPassword, {
            message: "Passwords don't match",
            path: ["confirmPassword"],
        })
        if (!schema.safeParse({ email, password, confirmPassword }).success) {
            return NextResponse.json({ message: "Invalid input" }, { status: 400 });
        }
        await connectDB(); 

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            password: hashedPassword
        });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "48h" });
        const response = NextResponse.json({ message: "User registered successfully" , user: { email: user.email }}, { status: 201 });
        response.cookies.set("token", token, { httpOnly: process.env.PRODUCTION === "true", secure: process.env.PRODUCTION === "true", sameSite: "strict", maxAge: 60 * 60 * 48 });
        return response;
    }catch(error){
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
    
}