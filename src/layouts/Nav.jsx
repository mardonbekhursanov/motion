import React, {useRef} from 'react'
import Container from '../Hoc/container'
import MagneticButton from '../components/Button/Button';
function Nav() {
    const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    // 1. Tugmaning ekrandagi o'rni va o'lchamlarini olamiz
    const rect = button.getBoundingClientRect();
    
    // 2. Kursorni tugma markaziga nisbatan koordinatalarini hisoblaymiz
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // 3. Chegara limitini belgilaymiz (Siz aytgan 10px)
    const maxMove = 10;

    // Matematik formula orqali harakatni maxMove (10px) dan oshirmaslik
    const moveX = Math.max(-maxMove, Math.min(maxMove, x));
    const moveY = Math.max(-maxMove, Math.min(maxMove, y));

    // 4. Tugmani kursor tomonga suramiz
    button.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  };

  const handleMouseLeave = () => {
    // Kursor tugmadan chiqib ketganda, tugma o'z joyiga (0, 0) qaytadi
    if (buttonRef.current) {
      buttonRef.current.style.transform = `translate3d(0px, 0px, 0)`;
    }
  };
  return (
    <nav className='header__nav'>
      <Container>
        <div className="nav__bar">
            <h1 className='nav__logo hover-target'>MotionCraft</h1>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#">Portfolio</a>
                </li>
                <li className="nav__item">
                    <a href="#">Haqimda</a>
                </li>
                <li className="nav__item">
                    <a href="#">Xizmatlar</a>
                </li>
                <li className="nav__item">
                    <a href="#">Narxlar</a>
                </li>
                <li className="nav__item">
                    <a href="#">Blog</a>
                </li>
                <li className="nav__item">
                    <a href="#">Kontakt</a>
                </li>
            </ul>
            <MagneticButton href='#' className='magnetic-button'>Bog'lanish</MagneticButton>
        </div>
      </Container>
    </nav>
  )
}

export default Nav
