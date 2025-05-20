export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` mx-auto max-w-screen-md text-lg`}>
        {/* <Header /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
