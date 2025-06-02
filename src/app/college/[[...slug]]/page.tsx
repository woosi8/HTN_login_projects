// app/docs/[[...slug]]/page.tsx
export default function Docs({ params }: { params: { slug?: string[] } }) {
  if (!params.slug) {
    return <div>문서 홈페이지</div>;
  }

  return (
    <div>
      <h1>문서: {params.slug.join(" / ")}</h1>
    </div>
  );
}
