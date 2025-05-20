import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { BsEnvelope, BsGithub } from "react-icons/bs";
import Navbar from "@/components/sections/navbar";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME}`,
  description: `Contact the ${SITE_NAME} team for support, feedback, or collaboration.`,
  openGraph: {
    title: "Contact FakeMess - Get in Touch",
    description: "Contact the FakeMess team for support, feedback, or collaboration. We're here to help with any questions about our chat screenshot generators.",
    type: "website",
    url: "https://fakemess.com/contact",
  },
  alternates: {
    canonical: "https://fakemess.com/contact"
  },
};

export default function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale();

  return (
    <main>
      <Navbar />
      <div className="min-h-screen">
        <div className="container p-4 mx-auto">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="container mx-auto max-w-2xl py-8">
              <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
              
              <div className="space-y-8">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{t("getInTouch.title")}</h2>
                  <p className="text-gray-700 mb-6">{t("getInTouch.description")}</p>

                  <div className="space-y-4">
                    <a 
                      href="mailto:nguyenbdangg@gmail.com"
                      className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <BsEnvelope className="w-6 h-6 text-gray-600 mr-4" />
                      <div>
                        <div className="font-semibold text-gray-800">{t("getInTouch.email")}</div>
                        <div className="text-gray-600">nguyenbdangg@gmail.com</div>
                      </div>
                    </a>

                    <a 
                      href="https://github.com/nguyenbdangg/fakegpt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <BsGithub className="w-6 h-6 text-gray-600 mr-4" />
                      <div>
                        <div className="font-semibold text-gray-800">{t("getInTouch.github")}</div>
                        <div className="text-gray-600">github.com/nguyenbdangg/fakegpt</div>
                      </div>
                    </a>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{t("responseTime.title")}</h2>
                  <p className="text-gray-700">{t("responseTime.description")}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">{t("whatToInclude.title")}</h2>
                  <div className="pl-6 space-y-3 text-gray-700">
                    <div className="flex">
                      <span className="mr-2">•</span>
                      <div>{t("whatToInclude.description")}</div>
                    </div>
                    <div className="flex">
                      <span className="mr-2">•</span>
                      <div>{t("whatToInclude.screenshots")}</div>
                    </div>
                    <div className="flex">
                      <span className="mr-2">•</span>
                      <div>{t("whatToInclude.contactMethod")}</div>
                    </div>
                    <div className="flex">
                      <span className="mr-2">•</span>
                      <div>{t("whatToInclude.requirements")}</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 