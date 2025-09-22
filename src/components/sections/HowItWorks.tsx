import React from "react";
import { CalendarDays, Truck, Map } from "lucide-react";

export default function HowItsWorks() {
    const steps = [
        {
            icon: <CalendarDays className="w-8 h-8 text-lime-500 " />,
            title: "1. Choose your subscription and rental period",
            description:
                "Select a subscription that fits your needs and a rental period – from 1 week to longer terms.",
        },
        {
            icon: <Truck className="w-8 h-8 text-lime-500 " />,
            title: "2. Speedy Delivery",
            description:
                "We deliver your scooter within 24 hours to your specified address..",
        },
        {
            icon: <Map className="w-8 h-8 text-lime-500 " />,
            title: "3. Use & Park Freely",
            description:
                "Enjoy your scooter! Park it as needed using the app. On your rental's last day, leave it in an accessible spot for pickup and snap a photo of its location via the app.",
        },
    ];

    return (
        <div className="py-16 px-4 text-center bg-white" id="How-t-Works">
            <div className="flex justify-center mb-4">
                <img src="/Scooter Move-05.jpg" alt="Scooter" className="w-20 h-20" />
            </div>
            <h2 className="text-4xl text-lime-500 font-bold mb-2">
                How it Works?
            </h2>
            <p className="text-black text-2xl text-bold mb-10">
                Renting a move scooter is simple and convenient.
            </p>

            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-6 rounded-2xl shadow-md transition hover:shadow-lg"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="bg-green-100 rounded-full p-3">{step.icon}</div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-black">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
