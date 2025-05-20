import { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/config";
import {Link} from '@/i18n/navigation';


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: locale === "vi" ? "FakeMess - Tạo Tin Nhắn Giả Thực Tế" : "FakeMess - Create Realistic Fake Chat Screenshots",
    description: locale === "vi" 
      ? "Tạo ảnh chụp tin nhắn thực tế cho ChatGPT và Facebook Messenger. Công cụ trực tuyến miễn phí để tạo cuộc hội thoại giả, hoàn hảo cho nội dung mạng xã hội, tài liệu tiếp thị và thiết kế."
      : "Generate authentic-looking chat screenshots for ChatGPT and Facebook Messenger. Free online tools for creating realistic conversations, perfect for social media content, marketing materials, and design mockups.",
    keywords: locale === "vi"
      ? [
          "trình tạo tin nhắn giả",
          "tạo ảnh chụp tin nhắn",
          "trình tạo messenger giả",
          "trình tạo chatgpt giả",
          "tạo cuộc hội thoại",
          "ảnh chụp tin nhắn giả",
          "tạo ảnh messenger",
          "tạo cuộc hội thoại chatgpt",
          "tạo tin nhắn giả",
          "tạo mẫu tin nhắn"
        ].join(", ")
      : [
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
      title: locale === "vi" ? "FakeMess - Tạo Tin Nhắn Giả Thực Tế" : "FakeMess - Create Realistic Fake Chat Screenshots",
      description: locale === "vi"
        ? "Tạo ảnh chụp tin nhắn thực tế cho ChatGPT và Facebook Messenger. Công cụ trực tuyến miễn phí để tạo cuộc hội thoại giả."
        : "Generate authentic-looking chat screenshots for ChatGPT and Facebook Messenger. Free online tools for creating realistic conversations.",
      type: "website",
      url: `https://fakemess.com${locale === "vi" ? "/vi" : ""}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === "vi" ? "FakeMess - Trình Tạo Tin Nhắn Giả" : "FakeMess - Chat Screenshot Generator"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: locale === "vi" ? "FakeMess - Tạo Tin Nhắn Giả Thực Tế" : "FakeMess - Create Realistic Fake Chat Screenshots",
      description: locale === "vi"
        ? "Tạo ảnh chụp tin nhắn thực tế cho ChatGPT và Facebook Messenger. Công cụ trực tuyến miễn phí để tạo cuộc hội thoại giả."
        : "Generate authentic-looking chat screenshots for ChatGPT and Facebook Messenger. Free online tools for creating realistic conversations.",
      images: ["/og-image.png"]
    },
    alternates: {
      canonical: `https://fakemess.com${locale === "vi" ? "/vi" : ""}`,
      languages: {
        'en': 'https://fakemess.com',
        'vi': 'https://fakemess.com/vi'
      }
    }
  };
}

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

export default async function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const t = await getTranslations("HomePage");

  return (
    <main className="flex-grow">
      <div className="container p-4">
        <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
        <p className="text-lg mb-8">{t("description")}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {generators.map((generator) => (
            <Link
              key={generator.id}
              href={generator.path as any}
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
                  <h2 className="text-xl font-semibold mb-2">{t(`generators.${generator.id}.name` as any)}</h2>
                  <p className="text-gray-600">{t(`generators.${generator.id}.description` as any)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* About/Benefit Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <Image
              src="/self-texting-behind-the-scene.jpg"
              alt="self-texting-behind-the-scene-meme"
              width={500}
              height={500}
              className="rounded-lg mx-auto"
            />
            <h2 className="text-3xl font-bold mb-6 text-center">{t("about.headline")}</h2>
            <p className="text-lg mb-6">
              {t("about.description1")}
              <span className="font-semibold text-violet-600">{t("about.brand")}</span>
              {t("about.description2")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>{t("about.bullet1")}</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>{t("about.bullet2")}</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>{t("about.bullet3")}</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <p>{t("about.bullet4")}</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 italic">{t("about.privacyNote")}</p>
          </div>
        </div>
      </div>
    </main>
  );
} 