import Cursor from "./components/cursor"
import "./assets/styles/style.css"
import "./assets/styles/media.css"
import Nav from "./layouts/Nav";
import Header from "./sections/header/Header";
import Portfolio from "./sections/portfolio/Portfolio";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS stillari
import Approach from "./sections/approach/Approach";
import Services from "./sections/services/Services";
function App() {
  useEffect(() => {
    AOS.init({
      // duration: 800, // Animatsiya tezligi (millisekundda)
      once: true,    // Animatsiya faqat bir marta ishlasin (skroll qilib tepaga chiqqanda qayta ishlamaydi)
      offset: 100
    });
  }, []);
    window.addEventListener("scroll", function() {
      // Sahifa jami necha piksel pastga skroll bo'lgani
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Sahifaning jami skroll bo'lishi mumkin bo'lgan balandligi
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Skroll foizini hisoblash (0 dan 100 gacha)
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Element kengligini foizda o'zgartirish
      document.querySelector(".page__height").style.width = scrollPercent + "%";
    });
  return (
    <>
      <div className="page__height"></div>
      <Cursor />
      <Nav />
      <div className="main">
        <Header/>
        <Portfolio/>
        <Approach/>
        <Services/>
      </div>
    </>
  );
}

export default App;
