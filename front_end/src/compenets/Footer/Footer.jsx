import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import fImage from "../../assets/footer-bg.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo Section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>

        {/* Social Icons Section */}
        <div className="text-3xl flex items-center gap-6 text-gray-700">
          <FaFacebookF className="cursor-pointer hover:text-blue-600 transition duration-300" />
          <FaTwitter className="cursor-pointer hover:text-sky-500 transition duration-300" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition duration-300" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;