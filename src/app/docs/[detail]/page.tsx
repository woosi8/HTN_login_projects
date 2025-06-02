export default function BlogPost({ params }: { params: { detail: string } }) {
  console.log(params);

  return (
    <div>
      <h1>블로그 포스트: {params.detail}</h1>
      <p>이것은 {params.detail} 포스트입니다</p>
    </div>
  );
}
