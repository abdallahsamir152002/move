import { Zap, Recycle, TreePine } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function VisionSection() {
    const { t } = useTranslation();

    const VisionItems = [
        {
            icon: <Zap className="w-8 h-8 text-lime-500" />,
            title: t("vision.zeroEmissions.title"),
            description: t("vision.zeroEmissions.description"),
        },
        {
            icon: <Recycle className="w-8 h-8 text-lime-500" />,
            title: t("vision.circularEconomy.title"),
            description: t("vision.circularEconomy.description"),
        },
        {
            icon: <TreePine className="w-8 h-8 text-lime-500" />,
            title: t("vision.greenerCities.title"),
            description: t("vision.greenerCities.description"),
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-lime-500 mb-4">
                    {t("vision.heading")}
                </h2>
                <p className="text-black font-semibold max-w-2xl mx-auto mb-12">
                    {t("vision.subtitle")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {VisionItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer"
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                boxShadow: "0px 10px 20px rgba(0,0,0,0.15)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {item.icon}
                            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
