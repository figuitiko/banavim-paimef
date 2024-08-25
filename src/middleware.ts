import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/auth/session";
import { logout } from "./app/auth/auth";


const protectedRoutes = ['/dashboard', '/dashboard/*'];

export default async function middleware(req: NextRequest) {
  
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = cookies().get('session')?.value;
  // 4. Redirect
   const session = await decrypt(cookie);

  // 4. Redirect
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }



  return NextResponse.next();
}