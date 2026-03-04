import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PayNuq | Strengthening Community, Empowering Lives",
  description: "Empowering Local Economies with Digital Money. A community-centric payment architecture powered by blockchain and real-world participation.",
  openGraph: {
    title: "PayNuq | Strengthening Community, Empowering Lives",
    description: "Empowering Local Economies with Digital Money.",
    url: "https://paynuq.com",
    siteName: "PayNuq",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayNuq | Strengthening Community, Empowering Lives",
    description: "Empowering Local Economies with Digital Money.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geist.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
