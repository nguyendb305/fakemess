import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();
  return (
    <footer className="border-t drop-shadow-sm m-4 flex justify-between text-sm pt-2">
      <p className="text-muted-foreground block">
        © 2025 by Andy Bing
      </p>
      <div className="flex gap-4">
        <Link href="/about">{t("about")}</Link>
        <Link href="/contact">{t("contact")}</Link>
        <Link href="/policy">{t("policy")}</Link>
      </div>
    </footer>
  );
};

export default Footer;
