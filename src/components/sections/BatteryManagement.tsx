import { Zap, BatteryCharging } from "lucide-react";

export default function BatteryManagement() {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image Left */}
        <div className="flex justify-center">
          <img
            src="/5W0A9798.JPG"
            alt="Battery Management"
            className="rounded-3xl shadow-lg w-full max-w-md"
          />
        </div>

        {/* Text Right */}
        <div className="space-y-6">
          {/* Title + Icon */}
          <div className="flex items-center space-x-3">
            <Zap className="text-lime-500 w-10 h-10" />
            <h2 className="text-3xl md:text-4xl font-bold text-lime-500">
              Battery Management
            </h2>
          </div>

          <p className="text-gray-700 font-medium">
            We take care of the charge, so you can focus on the ride.
          </p>

          {/* Card with Details */}
          <div className="bg-gray-50 rounded-2xl shadow p-6 space-y-4">
            <div className="flex items-center">
              <BatteryCharging className="text-lime-500 w-6 h-6 mr-2" />
              <h3 className="text-xl font-semibold">
                Proactive Monitoring & Swaps
              </h3>
            </div>

            <p className="text-gray-700">
              Forget battery anxiety. We continuously monitor the battery level
              of your scooter remotely. When the battery level drops to 40%, you
              can schedule a battery swap through the app. Simply leave the
              scooter in an accessible area, and our team will handle the battery
              replacement for you.
            </p>

            <p className="font-medium text-center">
              Our subscription tiers offer convenient battery swap options:
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                <span className="text-lime-500 font-semibold">Easy Move</span>:
                Includes one battery swap per week.
              </li>
              <li>
                <span className="text-lime-500 font-semibold">Super Move</span>:
                Includes two battery swaps per week.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
