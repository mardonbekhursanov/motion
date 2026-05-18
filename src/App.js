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
function App() {
  useEffect(() => {
    AOS.init({
      // duration: 800, // Animatsiya tezligi (millisekundda)
      once: true,    // Animatsiya faqat bir marta ishlasin (skroll qilib tepaga chiqqanda qayta ishlamaydi)
      offset: 100
    });
  }, []);
  return (
    <>
      <Cursor />
      <Nav />
      <div className="main">
        <Header/>
        <Portfolio/>
        <Approach/>
      </div>
    </>
  );
}

export default App;
