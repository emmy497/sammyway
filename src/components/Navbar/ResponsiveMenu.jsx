import React from "react";
// import { motion } from "motion/react"
import { AnimatePresence, motion } from "framer-motion";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

function ResponsiveMenu({ open, toggleMenu}) {
  const navItems = [
    { link: "Home", path: "/#home" },
    { link: "About", path: "/#about" },
    { link: "Services", path: "/#services" },
    { link: "products", path: "/products" },

  ];

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-[#a569bd] text-white py-10 m-6 rounded-3xl md:hidden">
            <ul className="flex flex-col justify-center items-center gap-10">
            { navItems.map(({ link, path }) => (
              <a
                key={path}
                href={path}
                className="block text-white first:font-medium text-[14px]"
                onClick={toggleMenu}
              >
                {link}
              </a>
            ))
        }
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
