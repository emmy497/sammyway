import { motion } from "motion/react";
import boy from "../../assets/images/boy.png";
import woman from "../../assets/images/woman.png";
import { SlideRight } from "../../utility/animation";
import "../../App.css";
import { Link } from "react-router-dom";
import About from "../About/About";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import { useState, useEffect } from "react";


function Home() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timeout);
    }, []);
  
    if (loading) return <Spinner />;
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

    <main className="overflow-hidden">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Footer />
    </main>
  );
}

export default Home;
