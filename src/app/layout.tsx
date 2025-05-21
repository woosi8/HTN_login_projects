import AuthContext from "./context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` mx-auto max-w-screen-md text-lg`}>
        <AuthContext>
          {/* <Header /> */}
          <main>{children}</main>
        </AuthContext>
      </body>
    </html>
  );
}
