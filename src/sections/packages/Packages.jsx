import React from 'react';
import './Packages.css'; // CSS faylingiz nomi

function Packages() {
  const data = [
    {
      id: 1,
      type: "STARTER",
      title: "Basic",
      price: 299,
      list: [
        "1 daqiqa gacha video",
        "Asosiy montaj",
        "Color correction",
        "2x revision",
        "MP4 format",
        "5 ish kuni"
      ]
    },
    {
      id: 2,
      type: "ENG MASHHUR",
      title: "Professional",
      price: 799,
      list: [
        "3 daqiqa gacha video",
        "Motion graphics",
        "Color grading",
        "Sound design",
        "4K eksport",
        "5x revision",
        "7 ish kuni"
      ]
    },
    {
      id: 3,
      type: "PREMIUM",
      title: "Cinematic",
      price: 1999,
      list: [
        "Cheksiz uzunlik",
        "3D animatsiya",
        "VFX effektlar",
        "Musiqa litsenziya",
        "Cheksiz revision",
        "Barcha formatlar",
        "Priority support"
      ]
    }
  ];

  return (
    <section className="packages">
      <div className="container">
        <p className="packages__subtitle">Narxlar</p>
        <h2 className="packages__title">Paketlar</h2>
        
        <div className="packages__general">
          {data.map((item, index) => (
            <div key={item.id} className="packages__box box">
              <p className="box__subtitle">{item.type}</p>
              <h3 className="box__title">{item.title}</h3>
              
              {/* TO'G'RILANGAN: Ortiqcha dollar va matnlar olib tashlandi */}
              <div className="box__price">
                <span>{item.price}</span>
              </div>
              
              <hr />
              
              <ul className="box__list">
                {item.list.map((feature, idx) => (
                  <li key={idx} className="box__item">{feature}</li>
                ))}
              </ul>
              
              <a href="#/" className="box__link">Tanlash</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;