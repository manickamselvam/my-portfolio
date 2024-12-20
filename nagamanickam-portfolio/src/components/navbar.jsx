import React from "react";
import logo from "../assets/NAG-artist-Logo-New.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6  ">
      <div>
        <img src={logo} alt="logo" className="h-14 w-14" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
