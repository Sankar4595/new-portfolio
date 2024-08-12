import React from "react";
import { Footer, Navbar, ScrollToTop } from "./components";
import { useLocation } from "react-router-dom";

const BaseApp = ({ children }) => {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      {children}
      {isFalse || <Footer />}
    </>
  );
};

export default BaseApp;
