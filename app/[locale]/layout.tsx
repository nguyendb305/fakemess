import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Navbar from '@/components/sections/navbar';
import Footer from '@/components/sections/footer';
import { SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { GoogleTagManager } from "@next/third-parties/google";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
  });
  



export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations('metadata');
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fakemess.com";
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s | ${SITE_NAME}`,
    },
    description: t('description'),
    keywords: t.raw('keywords').join(", "),
    authors: [{ name: "FakeMess Team" }],
    creator: "FakeMess",
    publisher: "FakeMess",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    category: "web tools",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}${locale === "vi" ? "/vi" : ""}`,
      locale: locale,
      alternateLocale: locale === "vi" ? "en" : "vi",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t('ogImageAlt')
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@fakemess",
      creator: "@fakemess",
      title: t('title'),
      description: t('description'),
      images: ["/og-image.png"]
    },
    alternates: {
      canonical: `${baseUrl}${locale === "vi" ? "/vi" : ""}`,
      languages: {
        'en': `${baseUrl}`,
        'vi': `${baseUrl}/vi`,
        'x-default': `${baseUrl}`
      }
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <NextIntlClientProvider>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}