import type { Metadata } from "next";
import { Mulish, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "./footer/page";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Join us for our special day. Wedding details, schedule, location and RSVP.",

  keywords: [
    "wedding invitation",
    "online wedding invitation",
    "wedding RSVP",
    "wedding ceremony",
    "wedding day",
  ],

  openGraph: {
    title: "Wedding Invitation",
    description:
      "Join us for our special day. Wedding details, schedule, location and RSVP.",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
