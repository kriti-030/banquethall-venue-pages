import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Get Inspired</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/Photos" className="hover:text-blue-400">
                Photos
              </NavLink>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-2">Our Location</h3>
          <p className="text-gray-300">39/1100, L1, Kalkaji, New Delhi-110019</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-blue-400">Home</NavLink></li>
            <li><NavLink to="/WhyUs" className="hover:text-blue-400">Why Us</NavLink></li>
            <li><NavLink to="/Venues" className="hover:text-blue-400">Venues</NavLink></li>
            <li><NavLink to="/Testimonials" className="hover:text-blue-400">Testimonials</NavLink></li>
            <li><NavLink to="/Terms" className="hover:text-blue-400">Terms & Conditions</NavLink></li>
            <li><NavLink to="/Privacy" className="hover:text-blue-400">Privacy Policy</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">BanquetHall.co</h3>
          <p className="text-gray-300">Reach out to us anytime</p>
          <p className="mt-2">+91 8375967071</p>
          <p className="mt-1">banquethall.co@gmail.com</p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
        © 2026 Banquet Halls. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
