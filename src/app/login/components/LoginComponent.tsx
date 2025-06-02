// app/login/components/LoginComponent.tsx
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAuthStore } from "… @/stores/authStore";

const LoginComponent = () => {
  const { data: session, status } = useSession();
  const {
    user,
    status: authStatus,
    setUser,
    setStatus,
    clearAuth,
  } = useAuthStore();

  // next-auth -> zustand 동기화
  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      setUser(session.user);
      setStatus("authenticated");
    } else if (status === "unauthenticated") {
      clearAuth();
    } else {
      setStatus("loading");
    }
  }, [session, status, setUser, setStatus, clearAuth]);

  return (
    <header className="sticky top-0 z-10 mb-5 flex items-center justify-between border-b border-solid border-gray-300 bg-white text-3xl">
      {authStatus === "authenticated" && user ? (
        <div>
          <p>로그인 되었습니다: {user.name}</p>
          <img
            src={user.image || ""}
            alt={`${user.name || "사용자"}의 프로필 이미지`}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
      ) : (
        <p>로그인이 필요합니다</p>
      )}

      {authStatus === "authenticated" ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <div className="flex gap-8">
          <button onClick={() => signIn("google")}>구글 로그인</button>
          <button onClick={() => signIn("kakao")}>카카오 로그인</button>
        </div>
      )}
    </header>
  );
};

export default LoginComponent;
