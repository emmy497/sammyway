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
