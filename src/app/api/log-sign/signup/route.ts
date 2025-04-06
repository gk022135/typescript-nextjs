"use server";

import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "../../configs/mongdb";
import User from "@/app/api/models/usermodel"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, password } = body;

    console.log("Data from frontend is:", body);


    if (!firstname || !lastname || !email || !password) {
      return NextResponse.json({
        message: "Hi Bro, data incomplete",
        success: false,
      }, {status : 400});
    }
    const userExist = await User.find({email : email});
    if(!userExist){
        return NextResponse.json({
            message : "Hello Bro you are already in my database",
            success : false
        },
        {status : 400}
    )
    }

    //process for saving in databases
    const newUser = new User(body); 
    await newUser.save();
    console.log("data save in db")


    // Just for testing purpose
    return NextResponse.json({
      message: "Successfully received data",
      success: true,
      data: body,
    });


  } catch (error) {
    console.error("Error while making POST request:", error);
    return NextResponse.json({
      message: "Error in posting signup data bro!!",
      success: false,
    });
  }
}
