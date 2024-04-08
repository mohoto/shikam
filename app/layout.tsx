import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/front/common/navbar";
import Footer from "@/components/front/common/footer";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: "Création de site web et marketing digital - Shikam",
  description: "Notre agence vous propose la création de votre site web ainsi que la gestion de vos publicités sur le web. Nous vous accompagnons dans votre stratégie digitale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
      <Navbar /> 
        {children}
      <Footer />
      </body>
    </html>
  );
}
