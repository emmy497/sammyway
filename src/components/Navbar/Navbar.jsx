import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { FaX, FaBars } from "react-icons/fa6";
import ResponsiveMenu from "./ResponsiveMenu";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Services", path: "/#services" },
    { link: "About ", path: "/#about" },
    { link: "Contact Us", path: "/#Footer" },
  ];

  return (
    <div className="w-full bg-white md:transparent  top-0 left-0 right-0 z-50 ">
      <nav className="px-[4%] pt-[20px]  md:pt-[40px] md:px-[7%]">
        <div className="flex justify-between items-center text-base gap-8">
          <div className="font-bold">
           <Link to="/#home"><Logo /></Link> 
          </div>

          {/* Nav items for large screens */}
          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({ link, path }) => (
              <a
                key={path}
                href={path}
                className="block text-base text-gray-900 hover:text-[#a569bd] "
              >
                {link}
              </a>
            ))}
          </ul>

          <Link to="/products">
            <div className="hidden md:inline-block p-2 rounded cursor-pointer text-white bg-[#a569bd] hover:bg-[#9d69bd] ">
              Purchase Materials
            </div>
          </Link>

          
          {/* Menu buttons for only mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaX className="h-[23px] w-[23px] text-gray-900 cursor-pointer" />
              ) : ( 
                <FaBars className="h-[25px] w-25px]  text-gray-900 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        <ResponsiveMenu open={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </div>
  );
}

export default Navbar;
