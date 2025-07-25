import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/language";
import { useEffect, useState } from "react";

export function LangToogle() {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useLanguageStore();

  const [currentLang, setCurrentLang] = useState(language);

  useEffect(() => {
    setCurrentLang(language);

    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "es" : "en";

    setLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="cursor-pointer relative"
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle language</span>
      <span className="absolute text-[0.6rem] bottom-0 right-0 bg-black text-white px-1 rounded">
        {currentLang.toUpperCase()}
      </span>
    </Button>
  );
}
