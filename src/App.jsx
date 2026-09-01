import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Venues from "./pages/Venues.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";
import Edengardenlawn from "./pages/Edengardenlawn.jsx";
import { venuePageRoutes } from "./routes/venuePageRoutes.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Venues" element={<Venues />} />
      <Route path="/Photos" element={<PlaceholderPage title="Photos" />} />
      <Route path="/Testimonials" element={<PlaceholderPage title="Testimonials" />} />
      <Route path="/WhyUs" element={<PlaceholderPage title="Why Us" />} />
      <Route path="/Terms" element={<PlaceholderPage title="Terms & Conditions" />} />
      <Route path="/Privacy" element={<PlaceholderPage title="Privacy Policy" />} />
      <Route path="/Edengardenlawn" element={<Edengardenlawn />} />
      {venuePageRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/Venues" replace />} />
    </Routes>
  );
};

export default App;
