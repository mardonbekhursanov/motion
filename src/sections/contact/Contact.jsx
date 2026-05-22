import React, { useState } from 'react';
import './Contact.css'; // CSS faylini ulash

function Contact() {
  // Form ma'lumotlarini saqlash uchun state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backendga yuborish logikasi shu yerga yoziladi
    console.log("Yuborilgan ma'lumotlar:", formData);
  };

  return (
    <section className="contact" id='contact'>
      <div className="container contact__container">
        
        {/* CHAP TOMON: Katta sarlavha va aloqa ma'lumotlari */}
        <div className="contact__info">
          <h2 className="contact__title">
            Keling, birgalikda yarataylik.
          </h2>
          
          <div className="contact__details">
            <div className="contact__row">
              <span className="contact__label">EMAIL</span>
              <a href="mailto:hello@motioncraft.uz" className="contact__value">hello@motioncraft.uz</a>
            </div>
            
            <div className="contact__row">
              <span className="contact__label">TELEFON</span>
              <a href="tel:+998901234567" className="contact__value">+998 90 123 45 67</a>
            </div>
            
            <div className="contact__row">
              <span className="contact__label">TELEGRAM</span>
              <a href="https://t.me/motioncraft_uz" target="_blank" rel="noreferrer" className="contact__value">@motioncraft_uz</a>
            </div>
            
            <div className="contact__row">
              <span className="contact__label">MANZIL</span>
              <span className="contact__value">Toshkent, O'zbekiston</span>
            </div>
            
            <div className="contact__row">
              <span className="contact__label">ISH VAQTI</span>
              <span className="contact__value">Dush–Juma, 9:00–18:00</span>
            </div>
          </div>
        </div>

        {/* O'NG TOMON: Minimalist Forma */}
        <div className="contact__form-wrapper">
          <form className="contact__form" onSubmit={handleSubmit}>
            
            <div className="form__group">
              <label className="form__label">ISMINGIZ</label>
              <input 
                type="text" 
                name="name"
                placeholder="Ali Valiyev" 
                className="form__input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label">EMAIL</label>
              <input 
                type="email" 
                name="email"
                placeholder="ali@example.com" 
                className="form__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label">LOYIHA TURI</label>
              <input 
                type="text" 
                name="projectType"
                placeholder="Brand film, Motion graphics..." 
                className="form__input"
                value={formData.projectType}
                onChange={handleChange}
              />
            </div>

            <div className="form__group">
              <label className="form__label">BUDJET</label>
              <input 
                type="text" 
                name="budget"
                placeholder="$500 — $2000" 
                className="form__input"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>

            <div className="form__group">
              <label className="form__label">XABARINGIZ</label>
              <textarea 
                name="message"
                placeholder="Loyiha haqida qisqacha..." 
                className="form__input form__textarea"
                rows="1"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="form__btn">
              XABAR YUBORISH &rarr;
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;