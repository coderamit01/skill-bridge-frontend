import { NextRequest, NextResponse } from "next/server";
import { userService } from "./service/user.service";
import { Roles } from "./constant/userRole";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  let isAuthenticated = false;
  let isAdmin = false;
  let isTutor = false;
  let isStudent = false;

  const { data } = await userService.getSession();
  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === Roles.admin;
    isTutor = data.user.role === Roles.tutor;
    isStudent = data.user.role === Roles.student;
  }
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Admin
  if (
    (isAdmin && path.startsWith("/tutor")) ||
    (isAdmin && path.startsWith("/dashboard"))
  ) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  // Tutor
  if (
    (isTutor && path.startsWith("/admin")) ||
    (isTutor && path.startsWith("/dashboard"))
  ) {
    return NextResponse.redirect(new URL("/tutor", request.url));
  }
  // Student
  if (
    (isStudent && path.startsWith("/admin")) ||
    (isStudent && path.startsWith("/tutor"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/tutor",
    "/tutor/:path*",
    "/dashboard",
    "/dashboard/:path*",
  ],
};
