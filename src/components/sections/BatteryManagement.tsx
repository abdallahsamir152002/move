import { Zap, BatteryCharging } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BatteryManagement() {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Left */}
        <div className="flex justify-center">
          <img
            src="/assets/5W0A9798.jpg"
            alt={t("battery.alt")}
            className="rounded-3xl shadow-lg w-full max-w-md"
          />
        </div>

        {/* Text Right */}
        <div className="space-y-6">
          {/* Title + Icon */}
          <div className="flex items-center space-x-3">
            <Zap className="text-lime-500 w-10 h-10" />
            <h2 className="text-3xl md:text-4xl font-bold text-lime-500">
              {t("battery.title")}
            </h2>
          </div>

          <p className="text-gray-700 font-medium">{t("battery.subtitle")}</p>

          {/* Card with Details */}
          <div className="bg-gray-50 rounded-2xl shadow p-6 space-y-4">
            <div className="flex items-center">
              <BatteryCharging className="text-lime-500 w-6 h-6 mr-2" />
              <h3 className="text-xl font-semibold">
                {t("battery.card.title")}
              </h3>
            </div>

            <p className="text-gray-700">{t("battery.card.description")}</p>

            <p className="font-medium text-center">
              {t("battery.card.swapTitle")}
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                <span className="text-lime-500 font-semibold">
                  {t("battery.card.plans.easy.title")}
                </span>
                : {t("battery.card.plans.easy.description")}
              </li>
              <li>
                <span className="text-lime-500 font-semibold">
                  {t("battery.card.plans.super.title")}
                </span>
                : {t("battery.card.plans.super.description")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
