import React from 'react'
import CubeCSS from '../../components/Cube/Cube';
import "./Approach.css"
import Container from '../../Hoc/container';
function Approach() {
  return (
    <div className='approach'>
      <Container>
        <div className="approach__general">
          <div className="approach__box">
            <p className="approach__text" data-aos="fade-up" data-aos-delay="100">
              Metodologiya
            </p>
            <h2 className="approach__title" data-aos="fade-up" data-aos-delay="200">
              Ko'p qirrali
              yondashuv
            </h2>
            <p className="approach__text2"  data-aos="fade-up" data-aos-delay="300">
              Har bir loyihaga 360° qarash — konseptsiyadan finalga qadar. Texnik mukammallik va estetik sezgi birligi. Mening ishim — tasavvuringizni haqiqatga aylantirish.
            </p>
          </div>
          <CubeCSS />
        </div>
      </Container>
    </div>
  )
}

export default Approach;
