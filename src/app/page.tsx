"use client";

import Link from "next/link";
import { useAuthStore } from "… @/stores/authStore";

export default function HomePage() {
  const { user, status } = useAuthStore();

  console.log(user);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section className="bg-white py-80 px-20">
        <div className="container mx-auto text-center">
          <h1 className="display-large-r mb-20">
            우리 서비스에 오신 것을 환영합니다
          </h1>
          <Link
            href="/login"
            className="px-32 py-16 bg-primary text-white rounded-8 hover:bg-primary-800"
          >
            로그인 페이지 가기
          </Link>
          <div className="flex gap-16 justify-center">
            {user ? (
              <div>
                <p>로그인 되었습니다: {user.name}</p>
                <img
                  src={user.image || ""}
                  alt={`${user.name || "사용자"}의 프로필 이미지`}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </div>
            ) : (
              <Link
                href="/login"
                className="px-32 py-16 bg-primary text-white rounded-8 hover:bg-primary-800"
              >
                로그인
              </Link>
            )}

            <Link
              href="/about"
              className="px-32 py-16 border border-primary text-primary rounded-8 hover:bg-primary-50"
            >
              서비스 소개
            </Link>
          </div>
        </div>
      </section>

      {/* 기능 소개 섹션 */}
      <section className="py-80 px-20">
        <div className="container mx-auto">
          <h2 className="headline-large-r text-center mb-40">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
            <FeatureCard
              title="간편한 로그인"
              description="구글, 카카오 소셜 로그인"
              icon="🔐"
            />
            <FeatureCard
              title="빠른 속도"
              description="최적화된 성능"
              icon="⚡"
            />
            <FeatureCard
              title="안전한 보안"
              description="데이터 암호화"
              icon="🛡️"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// 기능 카드 컴포넌트
function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white p-32 rounded-12 shadow-hover text-center">
      <div className="text-48 mb-16">{icon}</div>
      <h3 className="title-large-b mb-12">{title}</h3>
      <p className="body-medium-r text-gray-600">{description}</p>
    </div>
  );
}
