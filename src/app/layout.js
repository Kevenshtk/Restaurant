import "./globals.sass";

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
      </body>
    </html>
  );
}