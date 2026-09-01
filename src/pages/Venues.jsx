import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import venueData from "../data/venues.json";

const venueLinks = [
  { name: "Eden Garden Lawn", path: "/Edengardenlawn" },
  ...venueData.venues.map((v) => ({ name: v.name, path: v.proposedRoute })),
];

const Venues = () => {
  return (
    <>
      <div className="min-h-screen bg-blue-50 pt-10 pb-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Venue Pages</h1>
          <p className="text-gray-600 mb-8">Local preview — prepared venue JSX pages</p>
          <ul className="space-y-3">
            {venueLinks.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className="text-blue-600 hover:underline text-lg font-medium"
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Venues;
