// src/app/api/auth/[...nextauth]/route.ts
import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

export const dynamic = "force-static";

const isStaticBuild =
  process.env.NODE_ENV === "production" && !process.env.VERCEL;

// 조건부 핸들러 생성
const createHandlers = () => {
  if (isStaticBuild) {
    return {
      GET: async () =>
        Response.json(
          {
            error: "Authentication not available in static build",
          },
          { status: 501 }
        ),
      POST: async () =>
        Response.json(
          {
            error: "Authentication not available in static build",
          },
          { status: 501 }
        ),
    };
  } else {
    const authOptions: AuthOptions = {
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        KakaoProvider({
          clientId: process.env.KAKAO_CLIENT_ID as string,
          clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
        }),
      ],
    };

    const handler = NextAuth(authOptions);
    return { GET: handler, POST: handler };
  }
};

const { GET, POST } = createHandlers();

export { GET, POST }; // 한 번만 export ✅
