import AuthContext from "./context/AuthContext";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` mx-auto max-w-screen-md text-lg`}>
        <Providers>
          <AuthContext>
            {/* <Header /> */}
            <main>{children}</main>
          </AuthContext>
        </Providers>
      </body>
    </html>
  );
}
