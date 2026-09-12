import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";

const CompanyLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      {children}
      <FloatingContact />
      <Footer />
    </>
  );
};

export default CompanyLayout;
