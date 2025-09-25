import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className="w-full h-screen relative overflow-x-hidden">
      <img
        src="/assets/background.jpg"
        alt="Hero"
        className="w-full h-full object-cover z-[-1] absolute blur-[2px]"
      />
      <div className=" pt-24 h-full">
        <div
          className="absolute top-0 right-0 w-full h-full bg-lime-500/40"
          style={{
            clipPath: "polygon( 100% 0, 100% 100%, 60% 100%)",
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-full h-full bg-lime-500/40"
          style={{
            clipPath: "polygon(0 0%, 60% 0% , 20% 100% , 0% 100%)",
          }}
        ></div>
        <motion.div
          className="absolute top-1/3 transform left-24 -translate-y-1/2 z-20 pt-24 lg:max-w-1/3 w-full"
          initial={{ opacity: 0, transform: "translateX(-200px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h1 className="text-white text-4xl font-bold">Move Sharing</h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quo
            est doloribus fuga obcaecati ipsum a corporis laudantium. Modi,
            laudantium molestias? Nostrum cum omnis ratione beatae? Explicabo
            non perferendis voluptate.
          </p>
          <div className="mt-8 space-x-8">
            <motion.button
              className="bg-white text-lime-500 font-semibold py-3 px-6 rounded-full shadow-md cursor-pointer"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
                backgroundColor: "#f3f4f6",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {t("readyToRide.button")}
            </motion.button>
            <motion.button
              className="bg-transparent text-white font-semibold py-3 px-6 rounded-full shadow-md border-1 border-white cursor-pointer"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {t("navbar.downloadApp")}
            </motion.button>
          </div>
        </motion.div>
        <motion.img
          src="/scooter.png "
          className="w-2xl object-contain absolute top-1/2 -right-24 -translate-y-1/3 z-10"
          initial={{ opacity: 0, transform: "translateX(200px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{ duration: 0.5, delay: 1 }}
        />
      </div>
    </div>
  );
}
