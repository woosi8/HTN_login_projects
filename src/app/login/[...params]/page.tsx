// app/shop/[...params]/page.tsx
export default function Shop({ params }: { params: { params: string[] } }) {
  const category = params.params.join(" > ");

  return (
    <div>
      <h1>쇼핑 카테고리</h1>
      <p>현재 위치: {category}</p>
      <ul>
        {params.params.map((param, index) => (
          <li key={index}>
            단계 {index + 1}: {param}
          </li>
        ))}
      </ul>
    </div>
  );
}
