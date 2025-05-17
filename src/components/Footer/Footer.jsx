import { motion } from "motion/react";
import { FaInstagram, FaTwitter, FaTiktok, FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      id="Footer"
      className="w-full flex flex-col md:flex-row justify-center bg-[#a569bd] rounded-t-3xl pt-14 px-4 pb-10 "
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start 100px below, invisible
        whileInView={{ opacity: 1, y: 0 }} // Animate to position
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white md:ml-[90px] mr-[90px] "
      >
        <h1 className="text-2xl md:text-3xl  font-semibold ">SAMIWAY</h1>
        <p className="text-[14px]">Making you relevant to the world</p>

        <p className="mb-4 text-[14px]">
          Complete Learning for Children & Adults
          <br className="hidden md:block" /> We teach reading, writing, public
          speaking,
          <br className="hidden md:block " /> and core subjects to improve
          confidence and knowledge.
        </p>

        {/* Icos Section */}
        <div className="icons-div flex   ">
          <a
            href="https://www.instagram.com/samiwayeducational?igsh=Ym84ZzhydHBxOGQz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="mr-4" size={20} />
          </a>
          {/* <FaTwitter className="mr-4" size={20} /> */}
          <a
            href="https://www.tiktok.com/@youcanread?_t=ZN-8ueLOBF05va&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="mr-4" size={20} />
          </a>

          <a
            href="https://youtube.com/@samiwayconsult?si=auNjfoFafurLzP5h"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={20} className="mr-4" />
          </a>

          <a
            href="https://www.facebook.com/share/1N83799wYZ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-10 md:mt-0 text-white"
      >
        <h1 className="text-2xl text-white font-semibold md:mr-[20px]">
          Contact us
        </h1>
        <div className="flex flex-col">
          <div className="text-white font-semibold mb-4 text-[14px]">
            Have questions, comments or just want to say hello:
          </div>
          <div className="flex items-center mb-2">
            <div className="mr-2">
              <FaEnvelope />
            </div>
            <h1 className="text-[14px]">samiwayconsult@gmail.com</h1>
          </div>
          <div className="flex  items-center mb-2">
            <div className="mr-2">
              <FaMapMarkerAlt />
            </div>
            <div className="text-[14px]">
              6b, Adams adepju close, ijaiye, Lagos
            </div>
          </div>
          <div className="flex">
            <div className="mr-2">
              <FaPhone />
            </div>
            <div className="text-[14px]">+234 7082781079 , +234 8146354607</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
