"use client";

import { SessionProvider } from "next-auth/react";

interface AuthProps {
  children: React.ReactNode;
}
export default function AuthContext({ children }: AuthProps) {
  // 쿠키는 자동으로 포함됨 (credentials: "include"는 다른 도메인일 때만 명시적 설정 필요)
  // const res = await fetch("/api/user-data");

  return <SessionProvider>{children}</SessionProvider>;
}
