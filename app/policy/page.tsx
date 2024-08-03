import Navbar from "@/components/sections/navbar";
import { SITE_NAME } from "@/lib/constants";
import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: `Policy | ${SITE_NAME}`,
  description: `Policy and Terms of ${SITE_NAME}`,
};

const PolicyPage = () => {
  const t = useTranslations("Policy");
  const locale = useLocale();
  return (
    <main>
      <Navbar />
      <div className="p-4">
        <h1>{t("title")}</h1>
        <h2>{t("intro")}</h2>
        <p>{t("introContent1")}</p>
        <p>{t("introContent2")}</p>
        <h2>{t("usage")}</h2>
        <p>{t("usageContent")}</p>
        <ul>
          <li>{t("usageLi1")}</li>
          <li>{t("usageLi2")}</li>
          <li>{t("usageLi3")}</li>
          <li>{t("usageLi4")}</li>
          <li>{t("usageLi5")}</li>
        </ul>
        <h2>{t("aboutChatGPT")}</h2>
        <p>{t("ChatGPTcontent")}</p>
        <h2>{t("benefit")}</h2>
        <ul>
          <li>{t("benefitLi1")}</li>
          <li>{t("benefitLi2")}</li>
          <li>{t("benefitLi3")}</li>
          <li>{t("benefitLi4")}</li>
        </ul>
        <h2>{t("howTo")}</h2>
        <p>{t("howToContent")}</p>
      </div>
    </main>
  );
};

export default PolicyPage;
