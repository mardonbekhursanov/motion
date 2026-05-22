import React, { useState } from 'react';
import './FAQ.css'; // CSS faylini ulash

function Faq() {
  // Aktiv (ochiq) turgan savolning ID sini saqlash uchun state
  // Standart holatda birinchisi ochiq turishi uchun boshlang'ich qiymat 1 qilib belgilandi
  const [activeId, setActiveId] = useState(1);

  // Backenddan kelgandek simulyatsiya qilingan savol-javoblar massivi
  const faqData = [
    {
      id: 1,
      question: "Loyiha qancha vaqt oladi?",
      answer: "Loyiha hajmiga qarab, Basic paket 5 ish kunida, Professional 7 kunda, Cinematic esa 14 ish kuni ichida tayyorlanadi. Shoshilinch loyihalar uchun alohida narx taklif qilinadi."
    },
    {
      id: 2,
      question: "Qanday formatda material taqdim etish kerak?",
      answer: "Siz materiallaringizni xohlagan formatda (MP4, MOV, RAW) taqdim etishingiz mumkin. Bulutli xizmatlar (Google Drive, Telegram) orqali yuborish tavsiya etiladi."
    },
    {
      id: 3,
      question: "Revision (o'zgartirish) jarayoni qanday ishlaydi?",
      answer: "Har bir paketda belgilangan miqdorda bepul o'zgartirishlar kiritish imkoniyati mavjud. Montaj tugagach, siz o'z fikrlaringizni ro'yxat qilib berasiz va biz ularni to'g'rilaymiz."
    },
    {
      id: 4,
      question: "To'lov qanday amalga oshiriladi?",
      answer: "To'lovlar kelishilgan holda ikki bosqichda (oldindan bo'nak (avans) va loyiha topshirilgandan so'ng yakuniy to'lov) Click, Payme yoki bank hisob raqami orqali qabul qilinadi."
    },
    {
      id: 5,
      question: "Korporativ shartnoma tuzish mumkinmi?",
      answer: "Yuridik shaxslar va kompaniyalar uchun barcha kerakli hujjatlar, hisob-faktura (invoice) va rasmiy shartnomalar taqdim etiladi."
    }
  ];

  // Savol bosilganda ishlaydigan funksiya
  const toggleFaq = (id) => {
    // Agar bosilgan savol allaqachon ochiq bo'lsa, uni yopadi, aks holda yangisini ochadi
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq">
      <div className="container faq__container">
        <p className="faq__subtitle">Savol & Javob</p>
        <h2 className="faq__title">Ko'p so'raladigan savollar</h2>

        <div className="faq__list">
          {faqData.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div 
                key={item.id} 
                className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
              >
                {/* Savol qismi bosilganda ochilib-yopiladi */}
                <div className="faq__question-box" onClick={() => toggleFaq(item.id)}>
                  <h3 className="faq__question">{item.question}</h3>
                  <div className="faq__toggle-btn">
                    {/* Rasmda ochilganda xoch (krest) belgisi paydo bo'ladi */}
                    <span className="faq__icon"></span>
                  </div>
                </div>

                {/* Javob qismi */}
                <div className="faq__answer-box">
                  <p className="faq__answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;