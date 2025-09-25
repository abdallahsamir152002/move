import { useTranslation } from "react-i18next";

function Aboutmove() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-8 px-4 bg-white-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-bold text-lime-500 font-bold mb-10">
            {" "}
            {t("aboutMove.title")}
          </h2>
          <p className="text-black text-2xl text-bold max-w-3xl mx-auto">
            {t("aboutMove.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
export default Aboutmove;
