import { Leaf, Zap, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

// Reusable feature card component
type FeatureItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const FeatureItem = ({ icon: Icon, title, description }: FeatureItemProps) => (
  <article className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl text-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </article>
);

export default function OurGreenMission() {
  const { t } = useTranslation();

  // Features data using translation
  const Features = [
    {
      icon: Leaf,
      title: t("ourGreenMission.features.0.title"),
      description: t("ourGreenMission.features.0.description"),
    },
    {
      icon: Zap,
      title: t("ourGreenMission.features.1.title"),
      description: t("ourGreenMission.features.1.description"),
    },
    {
      icon: Users,
      title: t("ourGreenMission.features.2.title"),
      description: t("ourGreenMission.features.2.description"),
    },
  ];

  return (
    <section className="min-h-screen bg-white" id="Our-Green-Mission">
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-lime-500 mb-4">
            {t("ourGreenMission.title")}
          </h2>
          <p className="text-black text-lg leading-relaxed">
            {t("ourGreenMission.description")}
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div>
            <img
              src="/assets/5W0A9842.jpg"
              alt={t("ourGreenMission.imageAlt")}
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </div>

          {/* Right Side - Features List */}
          <div className="space-y-8">
            {Features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
