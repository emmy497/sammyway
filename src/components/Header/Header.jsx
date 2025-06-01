import { motion } from "motion/react";
import boy from "../../assets/images/boy.png";
import woman from "../../assets/images/woman.png";
import { SlideRight } from "../../utility/animation";
import "../../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="px-[4%]  md:pt-[7%] md:px-[7%] z-10  md:mb-0 mt-10 md:mt-0 h-[100vh]">
      <div class=" grid grid-cols-1 md:grid-cols-2  relative">
        <div class="flex flex-col items-center md:items-start  md:pb-[200px] text-center md:text-start pt-[40px] ">
          <motion.h1
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-[80px] font-bold  mb-6"
          >
            Find Your <br />
            <span className="text-[#a569bd] font-bold "> Perfect </span>
            Tutor
          </motion.h1>

          <motion.p
            variants={SlideRight(0.8)}
            initial="hidden"
            animate="visible"
            className="text-slate-600 text-[12px] md:text-[19px] mb-4  "
          >
            Complete Learning for Children & Adults.{" "}
            <br className="hidden md:block" />
            We teach reading, writing, public speaking, and core subjects
            <br className="hidden md:block" />
            to improve confidence and knowledge.
          </motion.p>

          <motion.div
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="bg-[#a569bd]  rounded-xl flex justify-center items-center p-4  md:w-[150px] text-white cursor-pointer hover:bg-[#9d69bd]"
          >
            <a href="mailto:samiwayconsult@gmail.com">Get in touch</a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          class="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          className="relative top-[10px] md:absolute md:right-[-50px] right-[15px] mx-auto md:top-[-70px] z-10"
        >
          <img
            src={woman}
            alt=""
            class="w-[250px] md:w-[550px]  drop-shadow object-fill"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
