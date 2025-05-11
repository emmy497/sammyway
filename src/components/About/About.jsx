import { motion } from "motion/react";

import Testimonials from "../Testimonials/Testimonials.jsx";
import { SlideLeft } from "../../utility/animation.js";
import { RiPriceTagFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

function About() {
  const cardData = [
    {
      id: 1,
      icon: <FaUserFriends size="30px" color="#a569bd" />,
      title: "One-on-one Teaching",
      paragraph:
        "Personalized sessions with expert tutors to help you learn faster and smarter.",
      delay: 0.4,
    },

    {
      id: 2,
      icon: <RiPriceTagFill size="30px" color="#a569bd" />,
      title: "Affordable Prices",
      paragraph: "Quality learning that fits your budget—no hidden fees.",
      delay: 0.6,
    },

    {
      id: 3,
      icon: <IoTimeOutline size="30px" color="#a569bd" />,
      title: "Learn Anywhere, Anytime",
      paragraph:
        "Flexible lessons that fit your schedule—learn anytime, anywhere.",
      delay: 0.8,
    },
  ];

  return (
    <section
      className="bg-[#f5f5f5]  relative top-[-70px] md:static mt-[90px] md:pt-[30px] md:mt-0
     "
    >
      <div id="about" className="">
        <div className="why-us  ">
          <div className="flex flex-col header-section p-4 justify-center items-center gap-4 max-w-[600px] mx-auto">
            <h1 className="text-purple-900 font-semibold  text-2xl">
              Why Choose us
            </h1>
            <h1 className="text-3xl text-center text-semibold mb-4">
              Benefits of online tutoring services with us
            </h1>
          </div>

          <div className="cards grid grid-cols-1 md:grid-cols-3 gap-4 md:mb-14 px-[5%]">
            {cardData.map(({ paragraph, title, icon, id, delay }) => (
              <motion.div
                variants={SlideLeft(delay)}
                initial="hidden"
                whileInView="visible"
                className="bg-white  "
                key={id}
              >
                <div
                  className=" p-4 shadow-2xl rounded-xl min-h-[130px]   "
                 
                >
                  <div className="mb-2 ">{icon}</div>
                  <div className=" font-semibold text-[14px]">{title}</div>
                  <p className="text-[12px]">{paragraph}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="relative top-[20px] bg-[#a569bd] rounded-xl shadow-2xl md:w-[70%] mx-auto
           text-center text-white p-[5px] mb-14 md:p-10  md:mb-[100px] max-h-[600px]"
        >
          <div className="text-3xl font-semibold ">Who are we?</div>
          <div className="about-paragraph text-center p-4 ">
            At Samiway Educational Consult, we empower learners of all ages with
            the skills they need to succeed. We specialize in reading, writing,
            and communication for children, youth, and adults—whether for
            academic excellence, career advancement, or personal growth. Our
            expert instructors use engaging, practical methods to make learning
            enjoyable. Beyond literacy, we offer subject tutoring, ensuring a
            well-rounded and adaptable education.
          </div>
        </motion.div> */}
      </div>

      <div className="video-section mb-10 md:mb-0 mt-14">
        <div className="text-center font-semibold text-2xl mb-6 ">
          Meet our Instructors
        </div>

        <div className="videos flex flex-col md:flex-row  justify-evenly items-center gap-y-4 ">
          <iframe
            className=" w-[80%] md:w-[300px] h-[200px] rounded"
            src="https://www.youtube.com/embed/GWsryvZfeYw?si=n-gp9SEB9uNhpF4r"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
         web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            className="w-[80%] md:w-[300px] h-[200px]  rounded"
            src="https://www.youtube.com/embed/XQX2Jky-_ys?si=wH7O4enPJWmOy1DE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            className="w-[80%] md:w-[300px] h-[200px] rounded h-[200px] "
            src="https://www.youtube.com/embed/f8U1N0mJhG8?si=Zdz-FYYE2U_MeKgG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          {/* <video
            controls
            className="w-[80%] md:w-[250px] h-[200px] rounded h-[200px] "
          >
            <source src={} type="video/mp4" />
          </video> */}
        </div>
      </div>

      {/* Our Mission and Vision */}

      <div
        className="flex flex-col md:flex-row md:justify-center 
      gap-4 md:gap-4 md:mt-[90px]  md:mb-[70px] mb-[50px] px-[5%] md:px-[5%] lg:px-[7%]"
      >
        {/* <motion.div
          initial={{ opacity: 0, y: 100 }} // Start 100px below, invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to position
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mission shadow-xl p-4 rounded-xl bg-[#a569bd] text-white max-w-[500px]"
        >
          <div className="text-3xl mb-4 font-semibold">Our Mission</div>
          <div></div>
        </motion.div> */}
        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          className="bg-white "
        >
          <div className=" p-4 shadow-2xl rounded-xl min-h-[130px] md:min-w-[400px] md:max-w-[500px]">
            <div className=" font-semibold text-[20px]">Our Mission</div>
            <p className="text-[12px]">
              {" "}
              To provide high-quality education and training that empowers
              individuals to stay relevant, excel in their careers, and thrive
              in life through innovative teaching, expert guidance, and a
              commitment to lifelong learning.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          className="bg-white "
        >
          <div className=" p-4 shadow-2xl rounded-xl min-h-[130px] md:min-w-[400px] md:max-w-[500px]">
            <div className=" font-semibold text-[20px]">Our Vision</div>
            <p className="text-[12px]">
              {" "}
              To equip individuals with the knowledge, skills, and mindset to
              stay relevant, adaptable, and successful in life and their
              careers.
            </p>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 100 }} // Start 100px below, invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to position
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="vision shadow-xl p-4 rounded-xl bg-[#a569bd] text-white max-w-[500px]"
        >
          <div className="text-3xl mb-4  font-semibold"></div>
          <div>
          
          </div>
        </motion.div> */}
      </div>

      <Testimonials />
    </section>
  );
}

export default About;
