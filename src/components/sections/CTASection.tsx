import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function CTAsection() {
  const { t } = useTranslation();

  return (
    <section className="bg-lime-500 text-center py-16 text-white mt-10 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-4 font-bold">{t("cta.heading")}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">{t("cta.description")}</p>

        <motion.button
          className="bg-white text-lime-500 font-semibold py-3 px-6 rounded-full shadow-md"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
            backgroundColor: "#f3f4f6"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {t("cta.button")}
        </motion.button>
      </div>
    </section>
  );
}

export default CTAsection;
