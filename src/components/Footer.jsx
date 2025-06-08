import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../Asset/image/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#fefbf6] py-8 px-6 font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Renderforest logo"
            className="w-8 h-8"
            width="52"
            height="52"
          />
          <span className="font-semibold text-[#2f365f] text-lg leading-6 select-none">
            Abhiko
          </span>
        </div>

        {/* Copyright */}
        <div className="text-black text-sm leading-5 select-none text-center">
          Abhishek Kumar Majumdar © 2025
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 text-[#2f365f] text-xl">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-black transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-black transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            aria-label="Pinterest"
            className="hover:text-black transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-black transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-black transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-black transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
