import {Zap , Recycle , TreePine} from 'lucide-react';



    const VisionItems = [
         {
            icon: <Zap className="w-8 h-8 text-lime-500" />,
            title: "Zero Emissions",
            description: "Our entire fleet is 100% electric, producing zero tailpipe emissions and helping improve air quality in our cities."
        },
         {
            icon: <Recycle className="w-8 h-8 text-lime-500" />,
            title: "Circular Economy",
            description: "We are committed to principles of the circular economy, focusing on durability, repairability, and recyclability of our vehicles."
        },
         {
            icon: <TreePine className="w-8 h-8 text-lime-500" />,
            title: "Greener Cities",
            description: "By providing an alternative to cars, we help reduce traffic, noise pollution, and free up urban space for people and nature."
        }           
    ];
    


export default function VisionSection() {
    return(

        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-lime-500 mb-4">
                    Our Vision for the Future
                </h2>
                <p className="text-black  text-bold max-w-2xl mx-auto mb-12">
                    We envision a world where electric micro-mobility is the preferred choice for short urban journeys, contributing to significant reductions in carbon emissions and traffic congestion. Move aims to be at the forefront of this green transportation revolution.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {VisionItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                        >
                            {item.icon}
                            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}   
 