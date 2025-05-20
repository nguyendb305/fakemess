import { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "FakeMess - Create Realistic Fake Chat Screenshots",
  description: "Generate authentic-looking chat screenshots for ChatGPT and Facebook Messenger. Free online tools for creating realistic conversations, perfect for social media content, marketing materials, and design mockups.",
  keywords: [
    "fake chat generator",
    "chat screenshot maker",
    "fake messenger generator",
    "fake chatgpt generator",
    "chat conversation maker",
    "fake chat screenshots",
    "messenger screenshot creator",
    "chatgpt conversation generator",
    "fake chat maker",
    "chat mockup generator"
  ].join(", "),
  openGraph: {
    title: "FakeMess - Create Realistic Fake Chat Screenshots",
    description: "Generate authentic-looking chat screenshots for ChatGPT and Facebook Messenger. Free online tools for creating realistic conversations.",
    type: "website",
    url: "https://fakemess.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FakeMess - Chat Screenshot Generator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FakeMess - Create Realistic Fake Chat Screenshots",
    description: "Generate authentic-looking chat screenshots for ChatGPT and Facebook Messenger. Free online tools for creating realistic conversations.",
    images: ["/og-image.png"]
  },
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
  alternates: {
    canonical: "https://fakemess.com"
  },
  category: "web tools",
  authors: [{ name: "FakeMess Team" }],
  creator: "FakeMess",
  publisher: "FakeMess",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const generators = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Generate fake ChatGPT conversations",
    icon: "/gpt-avatar.jpg",
    path: "/chatgpt",
  },
  {
    id: "messenger",
    name: "Facebook Messenger",
    description: "Generate fake Facebook Messenger conversations",
    icon: "/messenger-avatar.jpg",
    path: "/messenger",
  },
];

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <main className="flex-grow">
      <Navbar />
      <div className="container p-4">
        <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
        <p className="text-lg mb-8">{t("description")}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {generators.map((generator) => (
            <Link
              key={generator.id}
              href={generator.path}
              className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={generator.icon}
                  alt={generator.name}
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{generator.name}</h2>
                  <p className="text-gray-600">{generator.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
