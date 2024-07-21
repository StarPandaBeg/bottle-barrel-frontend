import { authStorage } from "@/lib/storage";
import { logout } from "@/service/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const handler = async (request: NextRequest, response: NextResponse) => {
  await logout();
  authStorage(cookies()).remove();
  return redirect("/");
};

export { handler as GET, handler as POST };
