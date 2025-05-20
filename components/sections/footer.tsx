import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();
  return (
    <footer className="border-t drop-shadow-sm mt-4 mx-4 py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-muted-foreground text-center sm:text-left">
          © 2025 by Andy Bing
        </p>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link 
            href="/about" 
            className="hover:text-primary transition-colors"
          >
            {t("about")}
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-primary transition-colors"
          >
            {t("contact")}
          </Link>
          <Link 
            href="/policy" 
            className="hover:text-primary transition-colors"
          >
            {t("policy")}
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
