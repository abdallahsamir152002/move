import React from "react";
import { BellRing, ParkingCircle, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Notifications() {
  const { t } = useTranslation();
  const notifications = t("notifications.items", { returnObjects: true });

  const icons = [BellRing, ParkingCircle, ShieldCheck];

  return (
    <div className="py-16 px-4 bg-white text-center" id="notifications">
      <div className="flex justify-center mb-4">
        <img src="/bells.jpeg" alt="Bell" className="w-20 h-20" />
      </div>

      <h2 className="text-3xl text-lime-500 font-bold mb-2">
        {t("notifications.title")}
      </h2>

      <p className="text-black text-xl mb-10">{t("notifications.subtitle")}</p>

      <div className="space-y-6 max-w-4xl mx-auto text-left">
        {notifications.map((item, idx) => {
          const Icon = icons[idx] || BellRing;
          return (
            <motion.div
              key={idx}
              className="bg-green-50 p-5 rounded-xl flex items-start gap-4 shadow-sm cursor-pointer"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="mt-1">
                <Icon className="w-8 h-8 text-lime-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
