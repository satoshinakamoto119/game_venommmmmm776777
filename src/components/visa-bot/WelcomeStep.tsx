
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, HelpCircle, Languages } from "lucide-react";

interface WelcomeStepProps {
  onStart: () => void;
  language: string;
  setLanguage: (lang: string) => void;
}

export const WelcomeStep = ({ onStart, language, setLanguage }: WelcomeStepProps) => {
  const languages = [
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const getWelcomeText = () => {
    switch (language) {
      case "ar":
        return {
          welcome: "مرحباً بك في بوت التقديم على الفيزا",
          description: "سأساعدك خطوة بخطوة في عملية التقديم على الفيزا من خلال أفضل مراكز الخدمات",
          start: "بدء التقديم",
          help: "المساعدة",
          changeLanguage: "تغيير اللغة"
        };
      case "fr":
        return {
          welcome: "Bienvenue dans le bot de demande de visa",
          description: "Je vous guiderai étape par étape dans votre demande de visa à travers les meilleurs centres de services",
          start: "Commencer la demande",
          help: "Aide",
          changeLanguage: "Changer de langue"
        };
      default:
        return {
          welcome: "Welcome to Visa Application Bot",
          description: "I will guide you step by step through your visa application process via the best service centers",
          start: "Start Application",
          help: "Help",
          changeLanguage: "Change Language"
        };
    }
  };

  const text = getWelcomeText();

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <div className="text-6xl mb-4">🤖</div>
        <h2 className="text-3xl font-bold text-gray-800">{text.welcome}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {text.description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Badge className="bg-blue-100 text-blue-800">TLScontact</Badge>
        <Badge className="bg-green-100 text-green-800">VFS Global</Badge>
        <Badge className="bg-purple-100 text-purple-800">BLS International</Badge>
        <Badge className="bg-orange-100 text-orange-800">Almaviva</Badge>
      </div>

      <div className="space-y-4">
        <Button
          onClick={onStart}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          {text.start}
        </Button>

        <div className="flex justify-center gap-4">
          <Button variant="outline" size="sm">
            <HelpCircle className="h-4 w-4 mr-2" />
            {text.help}
          </Button>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            <Languages className="h-4 w-4" />
            {text.changeLanguage}
          </p>
          <div className="flex justify-center gap-2">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={language === lang.code ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage(lang.code)}
                className="text-xs"
              >
                {lang.flag} {lang.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
