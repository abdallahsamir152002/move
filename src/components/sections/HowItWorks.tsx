import { CalendarDays, Truck, Map } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

type Step = {
  title: string;
  description: string;
};

export default function HowItsWorks() {
  const { t } = useTranslation();
  const steps = t("howItWorks.steps", {
    returnObjects: true,
  }) as unknown as Step[];
  const icons = [CalendarDays, Truck, Map];

  return (
    <div className="py-16 px-4 text-center bg-white" id="How-it-Works">
      <div className="flex justify-center mb-4">
        <img
          src="/assets/Scooter Move-05.jpg"
          alt="Scooter"
          className="w-20 h-20"
        />
      </div>

      <h2 className="text-4xl text-lime-500 font-bold mb-2">
        {t("howItWorks.title")}
      </h2>
      <p className="text-black text-xl mb-10">{t("howItWorks.subtitle")}</p>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = icons[index] || CalendarDays;

          return (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md cursor-pointer relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Icon className="w-8 h-8 text-lime-500" />
                </div>
              </div>

              {/* Title and description always visible */}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-black">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
