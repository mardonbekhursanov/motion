import React from 'react'
import Container from '../Hoc/container'
import MagneticButton from '../components/Button/Button';
function Nav() {
  return (
    <nav className='header__nav'>
      <Container>
        <div className="nav__bar">
            <h1 className='nav__logo hover-target'>MotionCraft</h1>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="nav__item">
                    <a href="/about">Haqimda</a>
                </li>
                <li className="nav__item">
                    <a href="#services">Xizmatlar</a>
                </li>
                <li className="nav__item">
                    <a href="#prices">Narxlar</a>
                </li>
                <li className="nav__item">
                    <a href="#blog">Blog</a>
                </li>
                <li className="nav__item">
                    <a href="#contact">Kontakt</a>
                </li>
            </ul>
            <MagneticButton href='#' className='magnetic-button'>Bog'lanish</MagneticButton>
        </div>
      </Container>
    </nav>
  )
}

export default Nav
