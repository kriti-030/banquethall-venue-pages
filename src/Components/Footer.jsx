import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const MAIN_WEBSITE_URL = "https://banquethall.co/venues/queenlawnandbanquet";

const SOCIAL_LINKS = [
  {
    Icon: FaFacebookF,
    link: "https://www.facebook.com/profile.php?id=61573440526154",
    label: "Facebook",
  },
  {
    Icon: FaPinterestP,
    link: "https://www.pinterest.com/banquethallco/?actingBusinessId=1104859858492208666",
    label: "Pinterest",
  },
  {
    Icon: FaInstagram,
    link: "https://www.instagram.com/banquethall.co/?hl=en",
    label: "Instagram",
  },
];

const PAYMENT_ICONS = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
];

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
            <li>
              <NavLink to="/" className="hover:text-blue-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/why-us" className="hover:text-blue-400">
                Why Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/venues" className="hover:text-blue-400">
                Venues
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" className="hover:text-blue-400">
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms-and-conditions" className="hover:text-blue-400">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className="text-blue-400 hover:text-blue-400">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">
            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              BanquetHall.co
            </a>
          </h3>
          <p className="text-gray-300">Reach out to us anytime</p>
          <p className="mt-2">+91 8375967071</p>
          <p className="mt-1">banquethall.co@gmail.com</p>
        </div>
      </div>

      <div className="flex justify-center space-x-5 mt-8">
        {SOCIAL_LINKS.map(({ Icon, link, label }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 hover:text-red-600 transition transform hover:scale-110"
          >
            <Icon size={24} />
          </a>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-6 flex-wrap gap-3">
        {PAYMENT_ICONS.map((src) => (
          <img key={src} src={src} alt="Payment method" className="h-7 w-auto" />
        ))}
      </div>

      <div className="container mx-auto px-6 mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Banquet Halls. All rights reserved.</p>
        <p className="mt-2">
          Designed and Developed by{" "}
          <a
            href="https://www.softwarehouseworld.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Software House
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
