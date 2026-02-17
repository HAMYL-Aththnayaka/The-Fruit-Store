import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          // Initial state (before entering)
          initial={{ opacity: 0, y: -100 }}
          // Animate to (when appearing)
          animate={{ opacity: 1, y: 0 }}
          // Exit state (when closing)
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-emerald-500 text-white py-10 m-6 rounded-3xl shadow-lg">
            <ul className="flex flex-col items-center gap-10">
              <li className="hover:text-gray-200 cursor-pointer">Home</li>
              <li className="hover:text-gray-200 cursor-pointer">About</li>
              <li className="hover:text-gray-200 cursor-pointer">Service</li>
              <li className="hover:text-gray-200 cursor-pointer">Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;