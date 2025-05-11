import { motion } from "motion/react";
import boy from "../../assets/images/boy.png";
import woman from "../../assets/images/woman.png";
import { SlideRight } from "../../utility/animation";
import "../../App.css";
import {Link} from "react-router-dom"

function Home() {
  return (
    // <div id="home" class=" mt-6 h-[80vh] md:h-[100vh] ">
    //   <div className="flex relative bg-[#a569bd] ">
    //     <div className="txt-div z-[5] mt-16  text-center md:text-start  ">
    //       <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-6">
    //         SAMI WAY <br /> Educational Limited
    //       </h1>
    //       <p className="font-bold mb-4">Making you relevant to the world</p>
    //       <p>
    //       Holistic Learning for Children & Adults <br className="hidden md:block" /> Teaching reading, writing, public speaking, <br className="hidden md:block"/> and core subjects to improve confidence and knowledge.
    //       </p>
    //       <div
    //         className="relative bg-white flex md:ml-0 mx-auto items-center
    //       p-4 shadow-xl justify-between w-[100%] h-[60px] mt-8"
    //       >
    //         <input
    //           className="w-full bg-transparent placeholder:text-slate-400 text-slate-700  outline-none "
    //           placeholder="Email"
    //           type="text"
    //         />
    //         <div className="bg-[#a569bd] h-full flex items-center absolute right-0 p-4 text-white cursor-pointer hover:bg-[#9d69bd]">
    //           Get in touch
    //         </div>
    //       </div>
    //     </div>

    //     <motion.div
    //       initial={{ opacity: 0, scale: 0 }}
    //       whileInView={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 0.5 }}
    //       className="w-[500px] hidden lg:block absolute top-[-150px] right-[30px]"
    //     >
    //       <img src={boy} alt="" />
    //     </motion.div>
    //   </div>
    // </div>

    <section className="px-[4%]  md:pt-[7%] md:px-[7%] z-10  md:mb-0 mt-10 md:mt-0 h-[100vh]">
      <div class=" grid grid-cols-1 md:grid-cols-2  relative">
        <div class="flex flex-col items-center md:items-start  md:pb-[200px] text-center md:text-start pt-[40px] ">
          {/* <motion.p
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="font-semibold mb-4 text-purple-900"
          >
            100% Satisfaction Guarantee
          </motion.p> */}

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

          {/* <motion.p
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="font-semibold mb-4"
          >
            Making you relevant to the world.
          </motion.p> */}
          <motion.p
            variants={SlideRight(0.8)}
            initial="hidden"
            animate="visible"
            className="text-slate-600 text-[12px] md:text-[19px] mb-4  "
          >
            Complete Learning for Children & Adults Teaching reading,{" "}
            <br className="hidden md:block" />
            writing, public speaking, and core subjects to improve{" "}
            <br className="hidden md:block" />
            confidence and knowledge.
          </motion.p>

          {/* done */}

          {/* Get in Touch  */}
          {/* <motion.div
            variants={SlideRight(0.8)}
            initial="hidden"
            animate="visible"
            className="relative bg-white flex md:ml-0 mx-auto items-center
           p-4 shadow-xl justify-between md:w-[100%] w-[80%] h-[45px] md:h-[60px] mt-8"
          >
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700  outline-none "
              placeholder="Email"
              type="text"
            />
            <div
              className="bg-[#a569bd] h-full flex items-center absolute right-0 p-4 text-white
             cursor-pointer hover:bg-[#9d69bd]"
            >
              Get in touch
            </div>
          </motion.div> */}
          <motion.div
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="bg-[#a569bd]  rounded-xl flex justify-center items-center p-4  md:w-[150px] text-white cursor-pointer hover:bg-[#9d69bd]"
          >
           <Link to="#services">Get in touch</Link> 
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

        {/* Form MObile */}
        {/* <motion.div
          class="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden absolute md:right-[-50px] md:top-[-90px]"
        >
          <img
            src={boy}
            alt=""
            class="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
          />
        </motion.div> */}
      </div>
    </section>
  );
}

export default Home;
