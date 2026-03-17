import { NextResponse } from "next/server";
import { userSchemaZod } from "@/utils/schemas";
import { connectDB } from "@/lib/mongodb";
import User from "@/model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export  async function POST(req: Request) {
    try{
        const { email, password }= await req.json();
        const schema = userSchemaZod.pick({ email: true, password: true });
        if (!schema.safeParse({ email, password }).success) {
            return NextResponse.json({ message: "Invalid input" }, { status: 400 });
        }
        await connectDB(); 
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return NextResponse.json({ message: "User does not exist" }, { status: 400 });
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid password" }, { status: 400 });
        }
        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET!, { expiresIn: "48h" });
        const response = NextResponse.json({ message: "Login successful" , user: { email: existingUser.email }}, { status: 200 });
        response.cookies.set("token", token, { httpOnly: process.env.PRODUCTION === "true", secure: process.env.PRODUCTION === "true", sameSite: "strict", maxAge: 60 * 60 * 48 });
        return response;
    }catch(error){
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}