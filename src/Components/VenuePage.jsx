import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaStarHalfAlt,
  FaRegStar,
  FaStar,
  FaPhone,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import customerimage from "../assets/customerimage.svg";
import Footer from "./Footer";
import VenuePolicies from "./VenuePolicies";
import VenueAddress from "./VenueAddress";
import FloatingContact from "./FloatingContact";
import {
  formatInr,
  getRatingBadge,
  getAggregateRatingLabel,
  getReviewCountLabel,
} from "../utils/venueFormat";


const renderStars = (rating) => {
  if (rating == null) return null;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating >= i - 0.5) {
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
    <>
      <p className="text-gray-600 text-sm mt-2">
        {pricingNote ?? "Not available from source"}
      </p>
      {venue.advancePayment != null && (
        <p className="text-gray-600 text-sm mt-2">
          Advance payment: {venue.advancePayment}
        </p>
      )}
    </>
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

const VenuePage = ({ venue, images, reviews }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [phone, setPhone] = useState("");
  const location = useLocation();
  const venueLabel = `${venue.name}, ${venue.cityLocality ?? ""}`.trim();

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
            )}
            <span className="text-gray-600">
              {getReviewCountLabel(venue.reviewCount)} Ratings & Reviews
            </span>
          </div>
          {reviews.length === 0 ? (
            <p className="text-gray-600">Individual reviews: Not available from source</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={`${review.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-5 rounded-lg shadow-md border border-gray-200"
                >
                  <div className="flex items-center space-x-3 flex-wrap gap-2">
                    <span className="text-lg font-semibold text-gray-900">{review.name}</span>
                    {review.verified && (
                      <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full">
                        ✓ Verified
                      </span>
                    )}
                    {review.rating != null && (
                      <>
                        <span className="flex space-x-1">{renderStars(review.rating)}</span>
                        <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">
                          {review.rating}/5
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Event Date: {review.eventDate} | PAX: {review.pax}
                  </p>
                  <p className="text-gray-700 mt-3">{review.review}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

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
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
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

      <FloatingContact venueName={venueLabel} />
      <Footer />
    </>
  );
};

export default VenuePage;
