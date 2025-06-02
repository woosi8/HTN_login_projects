// app/college/[[...slug]]/page.tsx
export default async function Docs({
  params,
}: {
  params: Promise<{ slug?: string[] }>; // ✅ Promise 타입
}) {
  const { slug } = await params; // ✅ await 추가

  if (!slug) {
    return <div>문서 홈페이지</div>;
  }

  return (
    <div>
      <h1>문서: {slug.join(" / ")}</h1>
    </div>
  );
}
