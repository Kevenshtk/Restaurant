import "./globals.sass";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Restaurant",
  description: "",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}