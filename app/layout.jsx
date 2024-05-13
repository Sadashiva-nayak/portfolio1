import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Sadashiva Nayak-portfolio website",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ThemeProvider attribute='class' defaultTheme='light'>
      <body className={outfit.className}>
      <Header/>
        {children}
      <Footer/>
        </body>
      </ThemeProvider>
    </html>
  );
}
