"use server"

import { NextRequest, NextResponse } from "next/server"
import { connectMongo } from "../../configs/mongdb";
import User from "../../models/usermodel";
import { parse } from "path";

export async function POST(req: NextRequest) {
    try {
        connectMongo();

        const Logindata = await req.json();
        const email =
            console.log("login data", Logindata)
        console.log("email", Logindata.email);
        console.log("password", Logindata.password)


        if (!Logindata.email || !Logindata.password) {
            return NextResponse.json({
                message: "invalid request",
                success: false
            }, { status: 400 })
        }


        const userExists = await User.findOne({ email: Logindata.email });
        if (!userExists) {
            return NextResponse.json(
                {
                    message: "Hello, go for signup first",
                    success: false,
                },
                { status: 400 }
            );
        }
        const userpass = userExists.password;


        //varifying
        if (Logindata.password != userpass) {
            return NextResponse.json({
                message: "wrong password",
                success: false
            }, { status: 400 })
        }

        
        return NextResponse.json({
            message: "Login Successfully",
            success: true,
        })

    } catch (error) {
        console.log("error in login", error)
        return NextResponse.json({
            message: " error while try to login",
            success: false
        }, { status: 500 })

    }
}