import "./globals.css";
import Avenir from "next/font/local";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["sans-serif"],
});

const avenir = Avenir({
  src: [
    {
      path: "fonts/avenir/AvenirLTStd-Roman.woff2",
      weight: "400",
    },
    {
      path: "fonts/avenir/Avenir-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-avenir",
  fallback: ["sans-serif"],
});

export async function generateMetadata(){
  const res=await fetch(process.env.BASE_URL+"api/SiteMeta/home");
  const JSON=await res.json();
  return{
      title:JSON[0]['title'],
      keywords:JSON[0]['keywords'],
      metadataBase: process.env.BASE_URL,
      description:JSON[0]['description'],
      openGraph: {
          images: JSON[0]['image'],
      },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${avenir.variable}`}>
        <NextTopLoader color="#29d66e" showSpinner={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
