"use server"


// going to write backend logic bro okk

// app/api/hello/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
    console.log("url hitted")
  return NextResponse.json({
    message: 'hello world',
    success: true,
  });
}
