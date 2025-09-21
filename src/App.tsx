// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Aboutmove from './Components/Aboutmove'
import HowItsWorks from './Components/HowItWorks'
import Notifications from './Components/Notifications'
import BatteryManagement from './Components/BatteryManagement'
import ReadyToRideSmarter from './Components/ReadyToRideSmarter'
import OurGreenMission from './Components/OurGreenMission'
import VisionSection from './Components/VisionSection'
import CTAsection from './Components/CTASection'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <Navbar />
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
  )
}

export default App
