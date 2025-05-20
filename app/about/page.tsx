import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import Navbar from "@/components/sections/navbar";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, a free online platform for creating realistic chat screenshots.`,
  openGraph: {
    title: "About FakeMess - Create Realistic Chat Screenshots",
    description: "Learn about FakeMess, a free online platform for creating realistic chat screenshots. Our tools help content creators, educators, and designers generate authentic-looking conversations.",
    type: "website",
    url: "https://fakemess.com/about",
  },
  alternates: {
    canonical: "https://fakemess.com/about"
  },
};

export default function About() {
  const t = useTranslations("About");
  const locale = useLocale();

  return (
    <main>
      <Navbar />
      <div className="min-h-screen">
        <div className="container p-4 mx-auto">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="container mx-auto max-w-3xl py-8">
              <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t("mission.title")}</h2>
                <p className="text-gray-700 mb-4">{t("mission.paragraph1")}</p>
                <p className="text-gray-700">{t("mission.paragraph2")}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t("offer.title")}</h2>
                <div className="pl-6 space-y-3 text-gray-700">
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <div>{t("offer.chatgpt")}</div>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <div>{t("offer.messenger")}</div>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <div>{t("offer.privacy")}</div>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <div>{t("offer.free")}</div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t("values.title")}</h2>
                <div className="pl-6 space-y-3 text-gray-700">
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <div>{t("values.accessibility")}</div>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <div>{t("values.privacy")}</div>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <div>{t("values.quality")}</div>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <div>{t("values.responsibility")}</div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t("commitment.title")}</h2>
                <p className="text-gray-700 mb-4">{t("commitment.paragraph1")}</p>
                <p className="text-gray-700">{t("commitment.paragraph2")}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 