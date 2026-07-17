import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white py-20 bg_gradient">
      <div className="container mx-auto px-6 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        {/* Logo */}
        <div>
          <p className="font-bold text-center md:text-left text-xl">
            Recipe<span className="text-green-500">Finder</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold mb-3">QUICK LINKS</p>

          <div className="flex flex-col text-start">
            <Link
              to="/"
              className="py-2 hover:text-gray-400 transition"
            >
              Home
            </Link>

            <Link
              to="/recipes"
              className="py-2 hover:text-gray-400 transition"
            >
              Recipes
            </Link>

            <Link
              to="/contact"
              className="py-2 hover:text-gray-400 transition"
            >
              Contact
            </Link>

            <Link
              to="/"
              className="py-2 hover:text-gray-400 transition"
            >
              Chefs
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <p className="font-semibold mb-3">LEGAL</p>

          <div className="flex flex-col text-start text-sm">
            <Link
              to="/"
              className="py-2 hover:text-gray-400 transition"
            >
              Terms and Conditions
            </Link>

            <Link
              to="/"
              className="py-2 hover:text-gray-400 transition"
            >
              License Agreement
            </Link>

            <Link
              to="/"
              className="py-2 hover:text-gray-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="py-2 hover:text-gray-400 transition"
            >
              Copyright Information
            </Link>

            <Link
              to="/"
              className="py-2 hover:text-gray-400 transition"
            >
              Cookies Policy
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <p className="font-semibold mb-3">SOCIAL MEDIA</p>

          <div className="flex mt-4 gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-blue-600 p-2 rounded-sm hover:scale-110 transition"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-pink-600 p-2 rounded-sm hover:scale-110 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="bg-sky-500 p-2 rounded-sm hover:scale-110 transition"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="bg-red-600 p-2 rounded-sm hover:scale-110 transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;