import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import { useState, useEffect } from "react";

function App() {
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
      <Home />
      <About />
      <Services />

      <Footer />
    </main>
  );
}

export default App;
