import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "../styles/global.scss"
import Header from "../components/header";
import Footer from "../components/footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});


export const metadata: Metadata = {
  title: "Nevel Tech",
  description: "This is Nevel Tech App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}