import React from "react";
import { BellRing, ParkingCircle, ShieldCheck } from "lucide-react";

export default function Notifications() {
  const notifications = [
    {
      icon: <BellRing className="w-8 h-8 text-lime-500" />,
      title: "Delivery Updates",
      description:
        "You'll receive a notification as soon as your scooter is delivered and ready for use. No waiting around!",
    },
    {
      icon: <ParkingCircle className="w-8 h-8 text-lime-500" />,
      title: "Smart Parking",
      description:
        "Always park your scooter in safe areas that comply with local regulations. Help us keep our cities tidy and accessible.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-lime-500" />,
      title: "Safety Gear Included",
      description:
        "Your safety is our priority. Each scooter comes equipped with a helmet and an integrated lock for your security and peace of mind.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-white text-center" id="notifications">
      <div className="flex justify-center mb-4">
        <img src="public/bells.jpeg" alt="Bell" className="w-20 h-20" />
      </div>
      <h2 className="text-3xl text-lime-500 font-bold mb-2">
        Important Notifications
      </h2>
      <p className="text-black mb-10">
        Stay informed and ride safe with our helpful notifications.
      </p>
      <div className="space-y-6 max-w-4xl mx-auto text-left">
        {notifications.map((item, idx) => (
          <div
            key={idx}
            className="bg-green-50 p-5 rounded-xl flex items-start gap-4 shadow-sm"
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
