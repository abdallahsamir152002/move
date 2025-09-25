import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Download, ChevronDown, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [langOpen, setLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const languageOptions: Record<"en" | "it", { label: string; flag: string }> = {
    en: { label: "English", flag: "/flags/uk.png" },
    it: { label: "Italiano", flag: "/flags/italy.png" },
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.overflowX = "hidden";

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full overflow-x-hidden z-50">
      {/* Navbar */}
      <motion.header
        className={`fixed top-2 left-1/2 -translate-x-1/2 w-full max-w-6xl 
                      px-4 py-2 flex justify-between items-center rounded-2xl
                      backdrop-blur-md transition-all duration-300 z-50
                      border ${isScrolled ? "bg-black/40 border-white/10 shadow-lg" : "bg-transparent border-transparent shadow-none"}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-6">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[88px] w-[120px] object-contain transition-all duration-300"
          />
        </div>

        {/* Links */}
        <nav className="hidden md:flex space-x-8 font-medium text-white">
          {["about", "howItWorks", "locations", "contact"].map((link) => (
            <motion.a
              key={link}
              href={`#${link}`}
              className="relative px-2 py-1"
              whileHover={{ y: -2, scale: 1.05, color: "#84cc16" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {t(`navbar.${link}`)}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-500 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition flex items-center justify-center"
              aria-label="Change language"
            >
              <Globe size={20} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: langOpen ? 1 : 0, y: langOpen ? 0 : -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`absolute right-0 mt-2 bg-white rounded-xl shadow-xl border w-40 overflow-hidden ${langOpen ? "block" : "hidden"}`}
            >
              {Object.keys(languageOptions).map((lang) => {
                const typedLang = lang as "en" | "it";
                return (
                  <button
                    key={typedLang}
                    className={`flex items-center justify-between px-4 py-2 w-full hover:bg-gray-100 transition ${currentLanguage === typedLang ? "font-semibold text-lime-600" : ""
                      }`}
                    onClick={() => {
                      i18n.changeLanguage(typedLang);
                      setLangOpen(false);
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <img
                        src={languageOptions[typedLang].flag}
                        alt={typedLang}
                        className="w-5 h-5 rounded-full"
                      />
                      {languageOptions[typedLang].label}
                    </span>
                    {currentLanguage === typedLang && <span>✔</span>}
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Download App Button */}
          <motion.button
            className="flex items-center gap-2 bg-lime-500 text-white font-bold px-4 py-2 rounded-xl shadow-md"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
              backgroundColor: "#65a30d",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Download size={20} />
            {t("navbar.downloadApp")}
          </motion.button>
        </div>
      </motion.header>

      {/* Scroll Down Icon */}
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
