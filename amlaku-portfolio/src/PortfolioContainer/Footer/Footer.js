import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";

export default function Footer() {
  const scrollToTop = () => {
    // Example scrollToTop function using ScrollService (if applicable)
    ScrollService.scrollHandler.scrollToHome();
  };

  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <div className="scroll-container">
      <button className="btn-scroll" onClick={scrollToTop}>
        <i className="fa fa-arrow-up"></i>
      </button>
      <p className="copyright">All rights reserved © Amlaku's {currentYear}</p>
    </div>
  );
}
