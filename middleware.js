import { NextResponse, NextRequest } from "next/server"

export function middleware(request) {
	console.log("request.ip: ", request.ip)
  return NextResponse.next()
}

export const config = {
  matcher: '/stat/:region*',
}