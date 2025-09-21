import {Leaf , Zap , Users } from "lucide-react";

// Static data outside the component  

const Features= [
    {
        icon: Leaf,
        title: "Sustainability First",
        description:"Our operations are designed with the planet in mind. From utilizing renewable energy sources for charging our fleet to implementing robust recycling programs for batteries and vehicle parts, sustainability is at the heart of everything we do.",
    },

    {
        icon: Zap,
        title: "Innovative Micro-Mobility ",
        description:"We offer a range of state-of-the-art electric scooters and bikes, equipped with the latest technology for safety, efficiency, and user convenience. Our smart app makes finding, unlocking, and riding a Move vehicle seamless.",
    },

    {
        icon: Users,
        title: "Community Focused",
        description:"Move is more than just a service; it's a community of forward-thinkers dedicated to creating greener, more livable cities. We partner with local authorities and communities to ensure our services contribute positively to urban life.",
    },
];

// Reausable feature card component

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
            <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    </article>
);

export default function OurGreenMission() {
    return(
        <section className="min-h-screen bg-white" id="Our-Green-Mission">
            <div className="container mx-auto px-4 py-16">
                {/* Section Header */}
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-lime-500 mb-4">Our Green Mission</h2>
                    <p className="text-black text-lg font-semibold leading-relaxed">
                         At Move, we are committed to revolutionizing urban transportation.
                        As a green startup, our core mission is to provide accessible and
                        environmentally friendly electric micro-mobility options.

                        <br/>
                        <br/>

                         We believe in a future where cities are less congested, air is
                        cleaner, and getting around is both fun and sustainable.
                    </p>
                </header>
                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side  - Image */}

                    <div> 
                        <img src="/5W0A9842.JPG"
                        alt="Electric scooters parked on a street"
                        loading="lazy"
                        className="w-full h-auto rounded-xl shadow-xl object-cover"/>
                    </div>
                    {/* Right Side - Features List */}
                    <div className="space-y-8">
                        {Features.map((feature, index) => (
                            <FeatureItem
                                key={index}
                               {... feature}/>)) }
                    </div>
                </div>
            </div>
        </section>
    );
}