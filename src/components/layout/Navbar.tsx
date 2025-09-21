import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
export default function LandingPage() {
  const [t, i18n] = useTranslation();
  const initialLang = window.location.hash.includes("lang=it") ? "it" : "en";

  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "it">(
    initialLang as "en" | "it"
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const languageOptions: Record<"en" | "it", { label: string }> = {
    en: { label: "EN" },
    it: { label: "IT" },
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.overflowX = "hidden";

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full overflow-x-hidden">
      <motion.header
        className={`fixed top-2 left-1/2 -translate-x-1/2 w-full max-w-6xl 
                      px-2 py-0 flex justify-between items-center rounded-2xl
                      backdrop-blur-md transition-all duration-300 z-50
                      border ${isScrolled ? "bg-black/40 border-white/10 shadow-lg" : "bg-transparent border-transparent shadow-none"}`}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-6">
          <img
            src={"/logo.png"}
            alt="Logo"
            className="h-22 w-30 object-contain transition-all duration-300"
          />
        </div>
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#about" className="hover:underline">
            {t("about")}
          </a>
          <a href="#howItWorks" className="hover:underline">
            {t("howItWorks")}
          </a>
          <a href="#locations" className="hover:underline">
            {t("locations")}
          </a>
          <a href="#contact" className="hover:underline">
            {t("contact")}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-white bg-black/40 px-3 py-1 rounded-xl hover:bg-black/60 transition"
            >
              {languageOptions[currentLang].label}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg">
                {Object.keys(languageOptions).map((lang) => {
                  const typedLang = lang as "en" | "it";
                  return (
                    <button
                      key={typedLang}
                      className="px-4 py-2 w-full text-left hover:bg-gray-100"
                      onClick={() => {
                        setCurrentLang(typedLang);
                        i18n.changeLanguage(typedLang);
                        setLangOpen(false);
                      }}
                    >
                      {languageOptions[typedLang].label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <button className="flex items-center gap-2 bg-lime-500 text-white text-bold px-4 py-2 rounded-xl hover:bg-lime-700 transition">
            <Download size={20} />
            {t("downloadApp")}
          </button>
        </div>
      </motion.header>

      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
}
