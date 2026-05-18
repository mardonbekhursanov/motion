import React from 'react'
import Container from '../../Hoc/container'
import "./Header.css"
import MagneticButton from '../../components/Button/Button'
import CountUp from 'react-countup';
function Header() {
  return (
    <header className='header'>
      <Container>
        <div className="header__box">
          <p className="header__job" data-aos="fade-up" data-aos-delay="200">
            Motion dizayner & Video montajchi
        </p>
        <h2 className="header__title" data-aos="fade-up" data-aos-delay="400">
          Harakatda <span className='header__title__mark' data-aos="fade-up" data-aos-delay="600">hayot</span> bor, <br />
          Men uni yarataman.
        </h2>
        <p className="header__text" data-aos="fade-up" data-aos-delay="800">
          Har bir kadr — hikoya. Har bir animatsiya — his. Brendingiz uchun unutilmas vizual kontent yarataman.
        </p>
        <div className="header__buttons">
          <MagneticButton href='#' data-aos="fade" data-aos-delay="200">
            Ishlarni ko'rish
          </MagneticButton>
          <a href="#contact" className="header__link"  data-aos="fade" data-aos-delay="200">
            Loyiha boshlash 
          </a>
        </div>
        </div>
        <hr />
        <ul className="header__list" data-aos="fade-up" data-aos-delay="200">
          <li className="header__item">
            <h2 className="header__item__title">
                <CountUp end={120} enableScrollSpy scrollSpyOnce duration={5}/>+
            </h2>
            <p className="header__item__text">
              tugallangan loyiha
            </p>
          </li>
          <li className="header__item">
            <h2 className="header__item__title">
              <CountUp end={45} enableScrollSpy scrollSpyOnce duration={5}/>+
            </h2>
            <p className="header__item__text">
              mijozlar
            </p>
          </li>
          <li className="header__item">
            <h2 className="header__item__title">
              <CountUp end={6} enableScrollSpy scrollSpyOnce duration={5}/>+
            </h2>
            <p className="header__item__text">
              yil tajriba
            </p>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header
