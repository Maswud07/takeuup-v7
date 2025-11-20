import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TakeUUp - Bangladesh's Premier Educational Platform",
  description: "Master SSC, HSC, Admission & Job preparation with interactive quizzes, AI-powered learning, and comprehensive study materials. Join thousands of successful students.",
  keywords: ["TakeUUp", "SSC", "HSC", "Admission", "Job Preparation", "Bangladesh", "Education", "Quiz", "Learning"],
  authors: [{ name: "TakeUUp Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "TakeUUp - Educational Platform",
    description: "Bangladesh's premier educational platform for exam preparation",
    url: "https://takeuup.com",
    siteName: "TakeUUp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TakeUUp - Educational Platform",
    description: "Master your exams with TakeUUp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} ${notoSansBengali.variable} antialiased bg-background text-foreground`}
          style={{ fontFamily: 'var(--font-noto-sans-bengali), var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </LanguageProvider>
  );
}
