// components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-white">KelightElectrical</h2>
          <p className="mt-2 max-w-md">
            Powering your world with reliable and efficient electrical
            solutions.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="mt-4">
              <strong>Phone:</strong> +234 906 8318 269
            </p>
            <p>
              <strong>Email:</strong> KelightElectrical@gmail.com
            </p>
            <p>
              <strong>Address:</strong> 123 Main Street, Effurun, Nigeria
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a
                href="https://www.facebook.com/profile.php/?id=100064067831958"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} KelightElectrical. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
