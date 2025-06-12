import { motion } from "motion/react";
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
      paragraph:
        "Build strong reading, writing, and communication skills to thrive in everyday life and expand future opportunities.",
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
        "Get support in subjects like English, maths, science, and more.",
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
