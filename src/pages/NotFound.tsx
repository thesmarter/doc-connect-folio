import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/data/content";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const t = content[language];

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6 text-primary">{t.notFound.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{t.notFound.message}</p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          {t.notFound.returnHome}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
