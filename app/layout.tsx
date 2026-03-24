import "./globals.css";
import { Poppins } from "next/font/google";
import ClientWrapper from "./components/ClientWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${poppins.variable} font-sans`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
