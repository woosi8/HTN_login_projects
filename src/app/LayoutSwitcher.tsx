// components/LayoutSwitcher.tsx
"use client";

import { usePathname } from "next/navigation";

export default function LayoutSwitcher({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 로그인/회원가입 페이지
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    return (
      <div className="mx-auto max-w-screen-md text-lg">
        <p>로그인 레이아웃</p>
        {children}
      </div>
    );
  }

  // 대시보드 페이지
  if (pathname.startsWith("/docs") || pathname.startsWith("/college")) {
    return (
      <div>
        <nav>닥스, 컬리지 네비</nav>
        {children}
      </div>
    );
  }

  // 기본 레이아웃
  return (
    <div>
      <header>기본 레이아웃</header>
      {children}
      <footer>기본 푸터</footer>
    </div>
  );
}
