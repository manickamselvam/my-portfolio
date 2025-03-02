import React from "react";

import logo from "../assets/NAG-artist-Logo-New.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { linkedInUrl, gitHubUrl } from "../constants";

const Navbar = ({ contactSection }) => {
  const scrollToContact = () => {
    if (contactSection.current) {
      contactSection.current.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align to the top of the viewport
      });
    }
  };
  return (
    <nav className="sticky top-10 z-10 flex items-center justify-between mx-10 pb-20 mt-10 text-neutral-300">
      <div>
        <img src={logo} alt="logo" className="h-14 w-14" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <FaPhoneAlt onClick={scrollToContact} />
      </div>
    </nav>
  );
};

export default Navbar;
