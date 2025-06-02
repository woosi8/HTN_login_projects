// app/shop/[...params]/page.tsx
export default async function Shop({
  params,
}: {
  params: Promise<{ params: string[] }>;
}) {
  const { params: categories } = await params; // ✅ await 추가
  const category = categories.join(" > ");

  return (
    <div>
      <h1>쇼핑 카테고리</h1>
      <p>현재 위치: {category}</p>
      <ul>
        {categories.map((param, index) => (
          <li key={index}>
            단계 {index + 1}: {param}
          </li>
        ))}
      </ul>
    </div>
  );
}
