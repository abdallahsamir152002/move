
import { FaFacebook , FaInstagram , FaTwitter} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 text-center md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src="/logo.png" alt="Move Logo" className="h-12" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lime-600 font-bold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">How it Works</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Safety</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lime-600 font-bold mb-3">Support</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lime-600 font-bold mb-3">Legal</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 text-sm px-1">
        <p className="text-black">© 2023 Move Inc. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-3 md:mt-0 text-black">
                    <a href="#"><FaFacebook className="hover:text-lime-500 transition" /></a>
                    <a href="#"><FaTwitter className="hover:text-lime-500 transition" /></a>
                    <a href="#"><FaInstagram className="hover:text-lime-500 transition" /></a>

                </div>
                </div>
      </div>
    </footer>

  );
}
