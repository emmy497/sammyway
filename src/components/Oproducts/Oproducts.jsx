import Navbar from "../Navbar/Navbar";
import tenses from "../../assets/images/tenses.jpeg";
import sale from "../../assets/images/sale.png";
import spell from "../../assets/images/spell.png";
import confusables from "../../assets/images/confusables.jpeg";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import { SlideLeft } from "../../utility/animation";
import { motion } from "framer-motion";
import Spinner from "../Spinner/Spinner";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Oproducts() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Spinner />;

  const handleCloseModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const materials = [
    {
      id: 1,
      imageUrl: tenses,
      description: "TENSES video courses 1, 2 and 3  (It's a 3 in 1 video)",
      price: "#5,000",
      delay: 0.6,
    },
    {
      id: 2,
      imageUrl: sale,
      description:
        "50 Common Errors in English that can cause you shame in public.  (50 Common English Mistakes and Their Corrections)",
      price: "#3,000",
      delay: 0.6,
    },
    {
      id: 3,
      imageUrl: confusables,
      description: "Compilation of Confusables  ",
      price: "#3,000",
      delay: 0.6,
    },
    {
      id: 4,
      imageUrl: spell,
      description:
        "How to spell and write with ease (Spelling Handout + video lecture on spelling and writing)",
      price: "#10,000",
      delay: 0.6,
    },
  ];
  return (
    <>
      <div className="relative w-[100%] overflow-hidden">
        <Navbar />
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 gap-6 p-[7%] px-[5%] z-20">
          {materials.map((material) => (
            <motion.div
              transition={{ type: "spring", stiffness: 300 }}
              variants={SlideLeft(material.delay)}
              initial="hidden"
              whileInView="visible"
              key={material.id}
              className="flex flex-row shadow-2xl p-4 text-[14px] rounded-2xl cursor-pointer "
            >
              <div className="w-[200px] h-[100px] mr-6">
                <img
                  className="w-full h-full object-cover"
                  src={material.imageUrl}
                  alt=""
                />
              </div>
              <div className=" w-[100%]">
                <div className="mb-6"> {material.description}</div>
                <div className="flex items-center ">
                  <div className="font-bold mr-auto"> {material.price}</div>
                  <div
                    className=" rounded cursor-pointer w-[80px] p-2 text-white bg-[#a569bd] hover:bg-[#9d69bd] text-center "
                    onClick={() => setIsModalOpen(true)}
                  >
                    Order
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Modal isModalOpen={isModalOpen} handleClose={handleCloseModal} />
      </div>
      <Footer />
    </>
  );
}

export default Oproducts;
