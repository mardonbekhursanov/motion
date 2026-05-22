import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: 1, title: "Haqimda", url: "#haqimda" },
    { id: 2, title: "Portfolio", url: "#portfolio" },
    { id: 3, title: "Kontakt", url: "#kontakt" }
  ];

  return (
    <footer className="footer">
      <div className="container footer__container">
        
        {/* CHAP TOMON: Mualliflik huquqi */}
        <div className="footer__copyright">
          © {currentYear} MotionCraft. Barcha huquqlar himoyalangan.
        </div>

        {/* O'RTADA: Navigatsiya havolalari */}
        <nav className="footer__nav">
          <ul className="footer__list">
            {footerLinks.map((link) => (
              <li key={link.id} className="footer__item">
                <a href={link.url} className="footer__link">{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* O'NG TOMON: Manzil */}
        <div className="footer__location">
          Toshkent, O'zbekiston
        </div>

      </div>
    </footer>
  );
}

export default Footer;