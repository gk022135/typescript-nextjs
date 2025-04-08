"use server"

import { NextRequest, NextResponse } from "next/server"
import { connectMongo } from "../../configs/mongdb";
import User from "../../models/usermodel";
import { parse } from "path";
import { headers } from "next/headers";
import { json } from "stream/consumers";

export async function POST(req: NextRequest) {
    try {
        connectMongo();

        const Logindata = await req.json();
        console.log("login data", Logindata)



        if (!Logindata.email || !Logindata.password) {
            return NextResponse.json({
                message: "invalid request",
                success: false,
            }, { status: 400 })
        }

        const email = Logindata.email;

        const userExists = await User.find({ email: email });
        console.log("hello ",userExists)
        if (!userExists) {
            return NextResponse.json(
                {
                    message: "Hello, go for signup first",
                    success: false,
                },
                { status: 400 }
            );
        }
        const userpass = JSON.stringify(userExists);
        console.log("pass", userpass.password)

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