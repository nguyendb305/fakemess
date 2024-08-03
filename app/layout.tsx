import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./styles/globals.css";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/components/sections/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen max-w-5xl mx-auto">
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
      <GoogleTagManager gtmId="GTM-NP32K5MM" />
    </html>
  );
}
