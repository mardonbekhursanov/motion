import React from 'react';
import './NotFound.css'; // O'zining CSS fayli

function NotFound() {
  return (
    <section className="error-page">
      <div className="error-page__container">
        
        {/* Katta va elegant 404 yozuvi */}
        <h1 className="error-page__code">404</h1>
        
        {/* Bildirishnoma matni */}
        <h2 className="error-page__status">Sahifa topilmadi</h2>
        <p className="error-page__message">
          Siz qidirayotgan sahifa mavjud emas yoki yaqin orada yangi loyihalar bilan birga qo'shiladi.
        </p>
        
        {/* Ortga qaytish tugmasi */}
        <div className="error-page__actions">
          <a href="/" className="error-page__btn">
            &larr; Bosh sahifaga qaytish
          </a>
        </div>

      </div>
    </section>
  );
}

export default NotFound;