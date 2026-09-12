import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Venues from "./pages/Venues.jsx";
import WhyUs from "./pages/WhyUs.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";
import Edengardenlawn from "./pages/Edengardenlawn.jsx";
import { venuePageRoutes } from "./routes/venuePageRoutes.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/venues" element={<Venues />} />
      <Route path="/Venues" element={<Venues />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/whyus" element={<Navigate to="/why-us" replace />} />
      <Route path="/WhyUs" element={<Navigate to="/why-us" replace />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/Testimonials" element={<Navigate to="/testimonials" replace />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/term-condition" element={<Navigate to="/terms-and-conditions" replace />} />
      <Route path="/Terms" element={<Navigate to="/terms-and-conditions" replace />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/Privacy" element={<Navigate to="/privacy-policy" replace />} />
      <Route path="/Photos" element={<PlaceholderPage title="Photos" />} />
      <Route path="/Edengardenlawn" element={<Edengardenlawn />} />
      {venuePageRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/venues" replace />} />
    </Routes>
  );
};

export default App;
