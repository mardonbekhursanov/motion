import React from 'react'
import Container from '../../Hoc/container'
import "./Header.css"
import MagneticButton from '../../components/Button/Button'
function Header() {
  return (
    <header className='header'>
      <Container>
        <div className="header__box">
          <p className="header__job">
            Motion dizayner & Video montajchi
        </p>
        <h2 className="header__title">
          Harakatda <span className='header__title__mark'>hayot</span> bor, <br />
          Men uni yarataman.
        </h2>
        <p className="header__text">
          Har bir kadr — hikoya. Har bir animatsiya — his. Brendingiz uchun unutilmas vizual kontent yarataman.
        </p>
        <div className="header__buttons">
          <MagneticButton href='#'>
            Ishlarni ko'rish
          </MagneticButton>
          <a href="#contact" className="header__link">
            Loyiha boshlash 
          </a>
        </div>
        </div>
        <hr />
        <ul className="header__list">
          <li className="header__item">
            <h2 className="header__item__title">
              120+
            </h2>
            <p className="header__item__text">
              tugallangan loyiha
            </p>
          </li>
          <li className="header__item">
            <h2 className="header__item__title">
              45+
            </h2>
            <p className="header__item__text">
              mijozlar
            </p>
          </li>
          <li className="header__item">
            <h2 className="header__item__title">
              6+
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
