import { NextRequest, NextResponse } from "next/server";

let reqCount = 0;
export const middleware = (req: NextRequest) => {
  console.log("req.url - ", req.url);
  if (req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
  const res = NextResponse.next();
  return res;
};
