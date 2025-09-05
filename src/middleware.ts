import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;
  if (token && pathname ==="/auth/login"|| pathname ==="/auth/signup") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: ["/cart", "/auth/login", "/auth/signup"],
};
