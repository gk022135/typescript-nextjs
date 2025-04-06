// app/api/hello/route.ts

import { NextResponse } from 'next/server'
import {connectMongo} from '@/app/api/configs/mongdb'


export async function GET() {
  console.log("GET /api/hello hit")
  await connectMongo();
  console.log("database connect succesfully")
  return NextResponse.json({
    message: 'hello world',
    success: true,
  })
}
