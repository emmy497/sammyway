import { motion } from "motion/react";
import adult from "../../assets/images/adult.png";
import dictionary from "../../assets/images/dictionary.png";
import exam from "../../assets/images/exam.png";
import tutoring from "../../assets/images/tutoring.png";
import { delay } from "motion";
import { SlideLeft } from "../../utility/animation";

import { FaBook } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { RiParentFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";

function Card() {
  const cardData = [
    {
      id: 1,
      title: "Literacy and Language Training",
      paragraph: "Build strong reading, writing, and communication skills to thrive in everyday life and expand future opportunities.",
      icon: <FaBook size="30px" />,
      delay: 0.6,
    },

    // {
    //   cardTitle: "Public Speaking & Communicationervkills",
    //   paragraph:
    //     "Gain confidence in expressing yourself in social and professional settings.",
    // },

    {
      id: 2,
      title: " Academic Tutoring (Children & Adults)",
      paragraph:
        "Get support in subjects like English, math, science, and more.",
      icon: <RiParentFill size="30px" />,
      delay: 0.6,
    },
    {
      id: 3,
      title: "Adult Learning Programs",
      paragraph:
        "Overcome learning barriers and develop skills for career and personal growth.",
      icon: <FaPerson size="30px" />,
      delay: 0.6,
    },
    {
      id: 4,
      title: "Exam Preparation",
      paragraph:
        "Prepare for school and professional exams with expert guidance.",
      icon: <FaBookOpenReader size="30px" />,
      delay: 0.6,
    },
  ];
  return (
    <>
      {/* {CardItems.map(({ cardTitle, paragraph , icon}) => (
        <motion.div
        initial={{  opacity: 0 ,y: 100}}    // Start 100px below, invisible
        whileInView={{ opacity: 1 ,y: 0 }}      // Animate to position
        transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            text-gray-950 bg-white  text-xl shadow-2xl
     p-4 text-center rounded-xl flex  space-between"
        >
          <div className="icon flex justify-start mr-4 "><img src={icon} alt="icon " className="w-[45px] h-[40px] " /></div>
          <div className="flex flex-col  text-start">
          <h2 className="text-xl font-semibold mb-2">{cardTitle}</h2>
          <p className="text-sm">{paragraph}</p>
          </div>
         
        </motion.div>
      ))} */}
      <div className="cards grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-14 px-[5%]">
        {cardData.map(({ paragraph, title, icon, id, delay }) => (
          <motion.div
            variants={SlideLeft(delay)}
            initial="hidden"
            whileInView="visible"
            className="bg-white "
          >
            <div
              className=" p-4 shadow-2xl rounded-xl min-h-[130px] max-h[400px] "
              key={id}
            >
              <div className="mb-2 ">{icon}</div>
              <div className=" font-semibold text-[18px]">{title}</div>
              <p className="text-[14px]">{paragraph}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Card;
