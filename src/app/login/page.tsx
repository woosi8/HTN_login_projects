"use client";
// import { signIn, signOut, useSession } from "next-auth/react";

const PageLogin = () => {
  // const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-10 mb-5 flex items-center justify-between border-b border-solid border-gray-300 bg-white text-3xl">
      <p>login</p>
      {/* {status === "authenticated" && session ? (
        <div>
          <p>로그인 되었습니다: {session?.user?.name}</p>
          <img
            src={session.user.image || ""}
            alt={`${session.user.name || "사용자"}의 프로필 이미지`}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
      ) : (
        <p>로그인이 필요합니다</p>
      )}{" "}
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn("google")}>Sign in</button>
      )} */}
    </header>
  );
};

export default PageLogin;
