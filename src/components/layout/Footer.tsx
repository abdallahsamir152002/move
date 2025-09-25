import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useTranslation();

  // Parent container animation (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // <-- التأخير بين الأعمدة
      },
    },
  };

  // Children animation (columns)
  const columnVariants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-gray-100 w-full"
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 text-center md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src="/logo.png" alt="Move Logo" className="h-12" />
          </div>

          {/* Right Side (3 Columns) */}
          <motion.div
            className="md:col-span-3 flex flex-col md:flex-row justify-end gap-10"
            variants={containerVariants}
          >
            {/* Quick Links */}
            <motion.div variants={columnVariants}>
              <h3 className="text-lime-600 font-bold mb-3">
                {t("quickLinks.title")}
              </h3>
              <ul className="space-y-1">
                <li><a href="#about" className="hover:underline">{t("quickLinks.about")}</a></li>
                <li><a href="#howItWorks" className="hover:underline">{t("quickLinks.howItWorks")}</a></li>
                <li><a href="#pricing" className="hover:underline">{t("quickLinks.pricing")}</a></li>
                <li><a href="#safety" className="hover:underline">{t("quickLinks.safety")}</a></li>
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={columnVariants}>
              <h3 className="text-lime-600 font-bold mb-3">{t("support.title")}</h3>
              <ul className="space-y-1">
                <li><a href="#help" className="hover:underline">{t("support.helpCenter")}</a></li>
                <li><a href="#contact" className="hover:underline">{t("support.contact")}</a></li>
                <li><a href="#faq" className="hover:underline">{t("support.faq")}</a></li>
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div variants={columnVariants}>
              <h3 className="text-lime-600 font-bold mb-3">{t("legal.title")}</h3>
              <ul className="space-y-1">
                <li><a href="#terms" className="hover:underline">{t("legal.terms")}</a></li>
                <li><a href="#privacy" className="hover:underline">{t("legal.privacy")}</a></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 text-sm px-1"
          variants={columnVariants}
        >
          <p className="text-black">{t("copyright")}</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-3 md:mt-0 text-black">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="hover:text-lime-500 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="hover:text-lime-500 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-lime-500 transition" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
