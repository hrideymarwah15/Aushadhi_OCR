import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aushadhi-OCR - AI-Powered Medicine Verification",
  description: "Protect yourself from counterfeit medicines with AI-powered OCR technology. Scan, detect, and stay safe.",
  keywords: "medicine verification, counterfeit detection, OCR, AI, healthcare, pharmaceutical safety",
  authors: [{ name: "Aushadhi-OCR Team" }],
  openGraph: {
    title: "Aushadhi-OCR - AI-Powered Medicine Verification",
    description: "Protect yourself from counterfeit medicines with AI-powered OCR technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aushadhi-OCR - AI-Powered Medicine Verification",
    description: "Protect yourself from counterfeit medicines with AI-powered OCR technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
