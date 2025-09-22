// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Navbar from "./components/layout/Navbar";
import Aboutmove from "./components/sections/Aboutmove";
import HowItsWorks from "./components/sections/HowItWorks";
import Notifications from "./components/sections/Notifications";
import BatteryManagement from "./components/sections/BatteryManagement";
import ReadyToRideSmarter from "./components/sections/ReadyToRideSmarter";
import OurGreenMission from "./components/sections/OurGreenMission";
import VisionSection from "./components/sections/VisionSection";
import CTAsection from "./components/sections/CTASection";
import ContactUs from "./components/sections/ContactUs";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Aboutmove />
      <HowItsWorks />
      <Notifications />
      <BatteryManagement />
      <ReadyToRideSmarter />
      <OurGreenMission />
      <VisionSection />
      <CTAsection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
