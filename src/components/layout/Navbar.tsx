import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Download, ChevronDown, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../utils";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [langOpen, setLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const languageOptions: Record<"en" | "it", { label: string; flag: string }> =
    {
      en: { label: "English", flag: "/flags/uk.png" },
      it: { label: "Italiano", flag: "/flags/italy.png" },
    };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.overflowX = "hidden";

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
    <div className="fixed top-0 w-full overflow-x-hidden z-50 flex items-center justify-center">
      {/* Navbar */}
      <motion.header
        className={cn(
          "fixed px-6 py-3 flex justify-between items-center rounded-2xl  z-50",
          isScrolled && "border-white/10 shadow-lg backdrop-blur-md"
        )}
        initial={{
          opacity: 0,
          backgroundColor: "transparent",
          width: "100%",
          top: "0rem",
        }}
        animate={{
          opacity: 1,
          width: isScrolled ? "70%" : "100%",
          top: isScrolled ? "0.5rem" : "0rem",
          backgroundColor: isScrolled ? "rgba(0,0,0,0.4)" : "transparent",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut", // removes bounce
        }}
        whileHover={
          isScrolled ? { scale: 1.02, backgroundColor: "rgba(0,0,0,0.55)" } : {}
        }
      >
        {/* Logo */}
        <div className="flex items-center gap-6">
          <img
            src={!isScrolled ? "/logo-white.png" : "/logo.png"}
            alt="Logo"
            className="h-[88px] w-[120px] object-contain transition-all duration-300"
          />
        </div>

        {/* Links */}
        <nav className="hidden md:flex space-x-4">
          {["about", "howItWorks", "locations", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={cn("relative px-2 py-1 ")}
            >
              <span
                className={cn(
                  "block font-medium text-white relative hover:text-lime-500 hover:scale-110 duration-300",
                  isScrolled && "text-white"
                )}
              >
                {t(`navbar.${link}`)}
              </span>
              {/* <span
                className={
                  "absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-500 transition-all group-hover:w-full" +
                  (isScrolled ? " text-white" : " text-black")
                }
              ></span> */}
            </a>
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
                    className={`flex items-center justify-between px-4 py-2 w-full hover:bg-gray-100 transition ${
                      currentLanguage === typedLang
                        ? "font-semibold text-lime-600"
                        : ""
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
