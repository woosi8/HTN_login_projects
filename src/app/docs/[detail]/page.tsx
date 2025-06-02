export default async function BlogPost({
  params,
}: {
  params: Promise<{ detail: string }>;
}) {
  const { detail } = await params; // ✅ await 사용

  return (
    <div>
      <h1>블로그 포스트: {detail}</h1>
      <p>이것은 {detail} 포스트입니다</p>
    </div>
  );
}
