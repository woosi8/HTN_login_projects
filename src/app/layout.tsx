import AuthContext from "./context/AuthContext";
import { Providers } from "./providers";

import LayoutSwitcher from "./LayoutSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <AuthContext>
            <LayoutSwitcher>{children}</LayoutSwitcher>
          </AuthContext>
        </Providers>
      </body>
    </html>
  );
}
