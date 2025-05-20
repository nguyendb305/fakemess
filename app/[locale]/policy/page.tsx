import { SITE_NAME } from "@/lib/constants";
import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: `Policy | ${SITE_NAME}`,
  description: `Usage Policy and Terms of ${SITE_NAME} - Guidelines for using our fake message generators responsibly.`,
  alternates: {
    canonical: "https://fakemess.com/policy",
    languages: {
      'en': 'https://fakemess.com/policy',
      'vi': 'https://fakemess.com/vi/policy',
      'x-default': 'https://fakemess.com/policy'
    }
  }
};

const PolicyPage = () => {
  const t = useTranslations("Policy");
  const locale = useLocale();
  
  return (
    <main className="container max-w-4xl mx-auto p-4">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-8">{t("title")}</h1>
        
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t("intro")}</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>{t("introContent1")}</p>
            <p>{t("introContent2")}</p>
          </div>
        </section>

        {/* Usage Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t("usage")}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{t("usageContent")}</p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>{t("usageLi1")}</li>
            <li>{t("usageLi2")}</li>
            <li>{t("usageLi3")}</li>
            <li>{t("usageLi4")}</li>
            <li>{t("usageLi5")}</li>
          </ul>
        </section>

        {/* Available Tools */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t("tools.title")}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* ChatGPT Generator */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t("tools.chatgpt.title")}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t("tools.chatgpt.description")}</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>{t("tools.chatgpt.feature1")}</li>
                <li>{t("tools.chatgpt.feature2")}</li>
                <li>{t("tools.chatgpt.feature3")}</li>
              </ul>
            </div>

            {/* Messenger Generator */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t("tools.messenger.title")}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t("tools.messenger.description")}</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>{t("tools.messenger.feature1")}</li>
                <li>{t("tools.messenger.feature2")}</li>
                <li>{t("tools.messenger.feature3")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t("howToTitle")}</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t("howToContent")}</p>
            <ol className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>{t("howTo.step1")}</li>
              <li>{t("howTo.step2")}</li>
              <li>{t("howTo.step3")}</li>
              <li>{t("howTo.step4")}</li>
            </ol>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">{t("disclaimer.title")}</h2>
          <p className="text-yellow-700 dark:text-yellow-300">{t("disclaimer.content")}</p>
        </section>
      </div>
    </main>
  );
};

export default PolicyPage;
