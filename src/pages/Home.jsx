import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import venueData from "../data/venues.json";

const venueLinks = [
  { name: "Eden Garden Lawn", path: "/Edengardenlawn" },
  ...venueData.venues.map((v) => ({ name: v.name, path: v.proposedRoute })),
];

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-blue-50 pt-10 pb-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">BanquetHall Venue Pages</h1>
          <p className="text-gray-600 mb-6">
            Local project for preparing venue JSX pages. This is not connected to banquethall.co.
          </p>
          <NavLink
            to="/Venues"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700"
          >
            Browse Venues
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
