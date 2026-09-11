import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import {
  FaStarHalfAlt,
  FaRegStar,
  FaStar,
  FaPhone,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";
import customerimage from "./assets/customerimage.svg";

import venue1 from "./assets/venue1.jpeg";
import venue2 from "./assets/venue2.jpeg";
import venue3 from "./assets/venue3.jpeg";
import venue4 from "./assets/venue4.jpeg";
import venue5 from "./assets/venue5.jpeg";
import venue6 from "./assets/venue6.jpeg";

const reviews = [
  {
    "name": "Ananya Sharma",
    "verified": false,
    "rating": 5,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "We finalised this hotel only a week before our wedding during a difficult period, yet the team pulled everything together beautifully. Guests kept complimenting the meals and the overall service, and we felt well looked after from start to finish."
  },
  {
    "name": "Rohan Mehta",
    "verified": false,
    "rating": 4,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "Our two-day celebration was spread across this property after we compared several luxury hotels in Delhi NCR. The scale and presence of the venue impressed us, and the catering consistently stood out as the strongest part of the experience."
  },
  {
    "name": "Priya Verma",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "We chose this hotel for our wedding, but the catering and floral setup did not match what had been discussed with us beforehand. Several parts of the event felt below our expectations."
  },
  {
    "name": "Aditya Malhotra",
    "verified": false,
    "rating": null,
    "eventDate": "Not available from source",
    "pax": "Not available from source",
    "review": "I never booked an event here, but my initial enquiry call left a poor impression. The representative I spoke with came across as dismissive, which made us look elsewhere for our function."
  }
];

const images = [
  venue1,
  venue2,
  venue3,
  venue4,
  venue5,
  venue6,
];

const venue = {
  "name": "Le Méridien New Delhi",
  "cityLocality": "Connaught Place, New Delhi",
  "address": "Windsor Pl, Connaught Place, New Delhi, Delhi 110001, India",
  "phone": "+91-8375967071",
  "rating": 4.4,
  "reviewCount": 24,
  "tags": null,
  "starClassification": "5-star hotel",
  "vegetarianPrice": 2700,
  "nonVegetarianPrice": 3500,
  "banquetPriceRangeMin": null,
  "banquetPriceRangeMax": null,
  "pricingNote": "Starting banquet per-plate prices excluding taxes (banquethalls.in)",
  "shortDescription": "Le Méridien New Delhi is located in the heart of New Delhi; it is an iconic glass building recognised as one of the 100 Icons of Delhi and an ideal venue for weddings and events.",
  "fullDescription": "The hotel offers over 20,200 square feet of event space with six meeting rooms, two ballrooms, and a boardroom that can host weddings and celebrations. It has 358 luxurious guest rooms. Vendors on the hotel panel provide flower decoration and DJ services.",
  "showBhManaged": false,
  "showDemandBanner": true,
  "venuePolicies": {
    "categories": [
      {
        "title": "Timings & Slots",
        "icon": "⏰",
        "items": [
          "Morning: 9:00 AM - 5:00 PM",
          "Evening: 7:00 PM - 2:00 AM"
        ]
      },
      {
        "title": "Changing Rooms",
        "icon": "🚪",
        "items": [
          "1 A/C changing room"
        ]
      },
      {
        "title": "Parking",
        "icon": "🚗",
        "items": [
          "Valet parking available + parking for 120 vehicles"
        ]
      },
      {
        "title": "Cancellation",
        "icon": "❌",
        "items": [
          "Non-cancellable"
        ]
      },
      {
        "title": "Lodging",
        "icon": "🏨",
        "items": [
          "358 luxurious guest rooms available",
          "Suitable for residential weddings and guest stays"
        ]
      },
      {
        "title": "Food",
        "icon": "🍽️",
        "items": [
          "Inhouse catering only",
          "Vegetarian and non-vegetarian catering available"
        ]
      },
      {
        "title": "Alcohol",
        "icon": "🍾",
        "items": [
          "Alcohol not permitted"
        ]
      },
      {
        "title": "Decoration",
        "icon": "🎨",
        "items": [
          "Decorators from panel only",
          "Vendors on panel for flower decorations and DJ"
        ]
      },
      {
        "title": "Other Policies",
        "icon": "📌",
        "items": [
          "Outdoor and poolside space available",
          "Minimum 50 pax allowed",
          "In-house DJ available; outside DJ not permitted",
          "Capacity: 25–1000 pax"
        ]
      }
    ]
  },
  "location": {
    "displayAddress": "Windsor Pl, Connaught Place, New Delhi, Delhi 110001, India",
    "mapEmbedUrl": "https://maps.google.com/maps?q=Le+M%C3%A9ridien+New+Delhi,+Windsor+Place,+Connaught+Place,+New+Delhi+110001&z=15&output=embed",
    "directionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Windsor+Pl,+Connaught+Place,+New+Delhi,+Delhi+110001,+India"
  },
  "heroImageFit": null
};


const formatInr = (value) =>
  typeof value === "number" ? value.toLocaleString("en-IN") : value;

const getRatingBadge = (rating, reviewCount) => {
  const count =
    reviewCount != null ? formatInr(reviewCount) : "Not available";
  if (rating != null) {
    return `⭐ ${rating}/5 | ${count}`;
  }
  return `⭐ Rating not available | ${count} reviews`;
};

const getAggregateRatingLabel = (rating) =>
  rating != null ? rating : "Not available";

const getReviewCountLabel = (reviewCount) =>
  reviewCount != null ? formatInr(reviewCount) : "Not available";

const DEFAULT_POLICY_CATEGORIES = [
  { title: "Timings & Slots", icon: "⏰" },
  { title: "Changing Rooms", icon: "🚪" },
  { title: "Parking", icon: "🚗" },
  { title: "Cancellation", icon: "❌" },
  { title: "Lodging", icon: "🏨" },
  { title: "Food", icon: "🍽️" },
  { title: "Alcohol", icon: "🍾" },
  { title: "Decoration", icon: "🎨" },
  { title: "Other Policies", icon: "📌" },
];

const renderStars = (rating) => {
  if (rating == null) return null;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }
  return stars;
};

const PricingBlock = ({ venue }) => {
  const {
    vegetarianPrice,
    nonVegetarianPrice,
    banquetPriceRangeMin,
    banquetPriceRangeMax,
    pricingNote,
  } = venue;

  if (vegetarianPrice || nonVegetarianPrice) {
    return (
      <>
        {vegetarianPrice != null && (
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-700">🥦 Vegetarian</span>
            <span className="text-gray-900">
              <s className="text-red-500 text-xl">₹{formatInr(vegetarianPrice)}</s> /Plate
            </span>
          </div>
        )}
        {nonVegetarianPrice != null && (
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-700">🍗 Non-Vegetarian</span>
            <span className="text-gray-900">
              <s className="text-red-500 text-xl">₹{formatInr(nonVegetarianPrice)}</s> /Plate
            </span>
          </div>
        )}
      </>
    );
  }

  if (banquetPriceRangeMin && banquetPriceRangeMax) {
    return (
      <p className="text-gray-900 mt-2">
        Banquet pricing:{" "}
        <s className="text-red-500 text-xl">
          ₹{formatInr(banquetPriceRangeMin)}–₹{formatInr(banquetPriceRangeMax)}
        </s>{" "}
        / Plate
      </p>
    );
  }

  return (
    <p className="text-gray-600 text-sm mt-2">
      {pricingNote ?? "Not available from source"}
    </p>
  );
};

const VenueTags = ({ venue }) => {
  const tags =
    venue.tags?.length > 0
      ? venue.tags
      : venue.starClassification
        ? [venue.starClassification]
        : null;

  if (!tags) return null;

  return (
    <div className="flex space-x-2 mt-3 flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

const VenuePolicies = ({ policies }) => {
  const categories = policies?.categories?.length
    ? policies.categories
    : DEFAULT_POLICY_CATEGORIES.map(({ title, icon }) => ({
        title,
        icon,
        items: ["Not available from source"],
      }));

  return (
    <section className="p-6 md:p-8 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl" aria-hidden="true">
          📜
        </span>
        <h2 className="text-2xl font-bold text-gray-800">Venue Policies</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <article
            key={category.title}
            className="rounded-lg border border-gray-200 bg-gray-50 p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl" aria-hidden="true">
                {category.icon}
              </span>
              <h3 className="font-semibold text-gray-900">{category.title}</h3>
            </div>
            <ul className="space-y-1.5 text-sm text-gray-600 list-disc pl-4">
              {(category.items?.length ? category.items : ["Not available from source"]).map(
                (item, index) => (
                  <li key={`${category.title}-${index}`}>{item}</li>
                )
              )}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

const buildDirectionsUrl = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

const buildMapEmbedUrl = (address, name) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(`${name}, ${address}`)}&z=15&output=embed`;

const VenueAddress = ({ venue }) => {
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");

  const address = venue.location?.displayAddress ?? venue.address;
  const directionsUrl =
    venue.location?.directionsUrl ?? buildDirectionsUrl(address);
  const mapEmbedUrl =
    venue.location?.mapEmbedUrl ?? buildMapEmbedUrl(address, venue.name);

  const handleSchedule = (e) => {
    e.preventDefault();
    if (!visitDate || !visitTime) {
      alert("Please select both date and time for your visit.");
      return;
    }
    alert(`Visit scheduled for ${visitDate} at ${visitTime}. Our team will contact you soon!`);
    setVisitDate("");
    setVisitTime("");
  };

  if (!address) return null;

  return (
    <section className="p-6 md:p-8 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="h-6 w-6 text-red-500 shrink-0" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-gray-800">Venue Address</h2>
      </div>

      <p className="text-gray-600 mb-6">
        {address}{" "}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline whitespace-nowrap"
        >
          Get Directions →
        </a>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="min-h-[280px] rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
          <iframe
            title={`Map — ${venue.name}`}
            src={mapEmbedUrl}
            className="w-full h-full min-h-[280px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="rounded-lg bg-[#0f1a3d] p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-white mb-6">
            <Calendar className="h-5 w-5 shrink-0" aria-hidden="true" />
            <h3 className="text-lg font-semibold">Schedule a visit to the venue</h3>
          </div>

          <form onSubmit={handleSchedule} className="space-y-4">
            <div className="relative">
              <input
                type="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="w-full rounded-md border border-gray-600 bg-[#1a2744] px-4 py-3 pr-10 text-white outline-none focus:border-pink-400"
                required
              />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            <div className="relative">
              <input
                type="time"
                value={visitTime}
                onChange={(e) => setVisitTime(e.target.value)}
                className="w-full rounded-md border border-gray-600 bg-[#1a2744] px-4 py-3 pr-10 text-white outline-none focus:border-pink-400"
                required
              />
              <Clock
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-pink-500 py-3 text-white font-semibold hover:bg-pink-600 transition"
            >
              Schedule Visit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


const FloatingContact = ({ venueName }) => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const phoneHref = "tel:+918375967071";
  const whatsappUrl = "https://wa.me/918375967071";

  const openWhatsApp = () => {
    const message = venueName
      ? `Hi, I am interested in ${venueName}.`
      : "Hi, I am interested in booking a venue.";
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <a
        href={phoneHref}
        className="fixed left-4 bottom-4 z-[99999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] ring-4 ring-white transition hover:scale-105 hover:bg-green-600"
        aria-label="Call BanquetHall at +91-8375967071"
        title="Call +91-8375967071"
      >
        <FaPhone className="text-2xl" aria-hidden="true" />
      </a>

      <div className="fixed right-4 bottom-4 z-[99999]">
        {showWhatsApp && (
          <div className="absolute bottom-full right-0 mb-3 w-72 overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <SiWhatsapp className="text-xl" aria-hidden="true" />
                <span className="text-sm font-semibold">BanquetHall.Co</span>
              </div>
              <button type="button" onClick={() => setShowWhatsApp(false)} className="text-xl leading-none hover:opacity-80" aria-label="Close">×</button>
            </div>
            <div className="bg-gray-100 p-4">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">BanquetHall.co</p>
                <p className="mt-1 text-sm text-gray-700">Hi there! How can I help you?</p>
              </div>
            </div>
            <div className="bg-gray-100 px-4 pb-4">
              <button type="button" onClick={openWhatsApp} className="w-full rounded-full bg-[#25D366] py-2.5 font-semibold text-white hover:bg-green-600">Start Chat</button>
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => setShowWhatsApp((open) => !open)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] ring-4 ring-white transition hover:scale-105 hover:bg-green-600"
          aria-label="WhatsApp Chat"
          title="WhatsApp Chat"
        >
          <SiWhatsapp className="text-3xl" aria-hidden="true" />
        </button>
      </div>

      <div className="fixed left-0 top-1/2 z-[99998] -translate-y-1/2">
        <button
          type="button"
          onClick={() => setShowCallback(true)}
          className="rounded-r-full bg-red-500 px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-red-600"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Call Back
        </button>
      </div>

      {showCallback && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/50 px-4" onClick={() => setShowCallback(false)} role="presentation">
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button type="button" onClick={() => setShowCallback(false)} className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold text-gray-700 shadow-md" aria-label="Close">×</button>
            <p className="rounded-lg bg-gray-900 p-6 text-white">Call back request — contact +91-8375967071</p>
          </div>
        </div>
      )}
    </>
  );
};


const SiteFooter = () => (
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
            <a href="https://banquethall.co/venues/queenlawnandbanquet" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li><NavLink to="/WhyUs" className="hover:text-blue-400">Why Us</NavLink></li>
          <li>
            <a href="https://banquethall.co/venues/queenlawnandbanquet" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Venues
            </a>
          </li>
          <li><NavLink to="/Testimonials" className="hover:text-blue-400">Testimonials</NavLink></li>
          <li><NavLink to="/Terms" className="hover:text-blue-400">Terms & Conditions</NavLink></li>
          <li><NavLink to="/Privacy" className="hover:text-blue-400">Privacy Policy</NavLink></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">
          <a href="https://banquethall.co/venues/queenlawnandbanquet" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            BanquetHall.co
          </a>
        </h3>
        <p className="text-gray-300">Reach out to us anytime</p>
        <p className="mt-2">+91 8375967071</p>
        <p className="mt-1">banquethall.co@gmail.com</p>
      </div>
    </div>

    <div className="flex justify-center space-x-5 mt-8">
      <a href="https://www.facebook.com/profile.php?id=61573440526154" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-red-600 transition transform hover:scale-110">
        <FaFacebookF size={24} />
      </a>
      <a href="https://www.pinterest.com/banquethallco/?actingBusinessId=1104859858492208666" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-gray-400 hover:text-red-600 transition transform hover:scale-110">
        <FaPinterestP size={24} />
      </a>
      <a href="https://www.instagram.com/banquethall.co/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-red-600 transition transform hover:scale-110">
        <FaInstagram size={24} />
      </a>
    </div>

    <div className="flex justify-center space-x-4 mt-6 flex-wrap gap-3">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Payment method" className="h-7 w-auto" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Payment method" className="h-7 w-auto" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Payment method" className="h-7 w-auto" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Payment method" className="h-7 w-auto" />
    </div>

    <div className="container mx-auto px-6 mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Banquet Halls. All rights reserved.</p>
      <p className="mt-2">
        Designed and Developed by{" "}
        <a href="https://www.softwarehouseworld.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Software House
        </a>
      </p>
    </div>
  </footer>
);


const LeMeridienNewDelhi = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [phone, setPhone] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentImage(0);
    setShowMore(false);
  }, [location.pathname]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10 || isNaN(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    console.log("Customer Phone:", phone);
    alert("Your request has been submitted!");
    setPhone("");
  };

  const aboutExpanded =
    venue.fullDescription ?? "Not available from source";

  return (
    <>
      <nav className="bg-blue-50 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center px-6 py-4">
          <NavLink to="/">
            <img src={logo} alt="Company Logo" className="w-auto h-12" />
          </NavLink>
        </div>
      </nav>

      <div className="h-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-6 pb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-96">
            <img
              src={images[currentImage]}
              alt={venue.name}
              className={`w-full h-full ${
                currentImage === 0 && venue.heroImageFit === "contain"
                  ? "object-contain bg-gray-900"
                  : "object-cover"
              }`}
            />
            <button
              type="button"
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              aria-label="Previous photo"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              aria-label="Next photo"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-3 flex-wrap gap-2">
              <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm">
                {getRatingBadge(venue.rating, venue.reviewCount)}
              </span>
              {venue.showBhManaged && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                  Bh Managed
                </span>
              )}
            </div>

            <h2 className="text-2xl font-bold mt-2">
              {venue.name}, {venue.cityLocality}
            </h2>
            <p className="text-gray-600 mt-1">{venue.address}</p>

            <VenueTags venue={venue} />

            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Pricing</h3>
              <PricingBlock venue={venue} />
            </div>

            <div className="mt-6 flex space-x-4 justify-end">
              <button type="button" className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold">
                See Prices
              </button>
              <button
                type="button"
                className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold"
              >
                Venue Tour
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-2">About this venue</h2>
          <p className="text-gray-700 mb-2">
            {venue.shortDescription}
            {showMore && <span> {aboutExpanded}</span>}
            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              className="text-blue-600 font-medium ml-1"
            >
              {showMore ? " Show less" : " Read more"}
            </button>
          </p>
          <div className="flex items-center space-x-3 mt-4">
            <span className="text-lg font-semibold">Call {venue.name}</span>
            <FaPhone className="text-green-500 text-2xl" />
          </div>
          <p className="text-gray-800 text-lg mt-1">
            <a href="tel:+918375967071" className="hover:underline">
              {venue.phone}
            </a>
          </p>
          {venue.showDemandBanner !== false && (
            <div className="mt-4 p-3 border border-blue-400 bg-blue-100 text-blue-600 rounded-lg flex items-center space-x-2">
              <span className="text-lg font-semibold">
                ⚡ Hurry UP! This Venue Is In High Demand
              </span>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ratings & Reviews</h2>
          <div className="flex items-center space-x-4 mb-6 flex-wrap gap-2">
            <span className="text-4xl font-bold text-green-600">
              {getAggregateRatingLabel(venue.rating)}
            </span>
            {venue.rating != null && (
              <div className="flex space-x-1">{renderStars(venue.rating)}</div>

        <VenuePolicies policies={venue.venuePolicies} />

        <VenueAddress venue={venue} />

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 space-y-3">
              <h2 className="text-2xl font-bold">Have us call you!</h2>
              <p className="text-gray-600">
                Please provide us with your contact number (10 digit mobile number)
              </p>
              <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-3 flex-wrap">
                <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                  <span className="px-3 bg-gray-200 flex items-center">+91</span>
                  <input
                    type="text"
                    maxLength="10"
                    className="p-2 w-full outline-none"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="border border-pink-500 text-pink-500 px-5 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition"
                >
                  Submit
                </button>
              </form>
              <p className="text-sm text-gray-600">
                By submitting this form you agree to our{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms and Conditions
                </a>
              </p>
            </div>
            <div className="hidden md:block md:w-1/3">
              <img src={customerimage} alt="Call support illustration" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <FloatingContact venueName={`${venue.name}, ${venue.cityLocality}`} />
      <SiteFooter />
    </>
  );

};

export default LeMeridienNewDelhi;
