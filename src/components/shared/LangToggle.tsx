import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const LangToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer relative"
      onClick={toggleLanguage}
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle language</span>
      <span className="absolute text-[0.6rem] bottom-0 right-0 bg-black text-white px-1 rounded">
        {i18n.language.toUpperCase()}
      </span>
    </Button>
  );
};
