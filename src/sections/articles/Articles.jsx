import React from 'react';
import './Articles.css'; // O'zining CSS fayli

function Articles() {
  // Backenddan kelayotganidek simulyatsiya qilingan rasm URL manziliga ega massiv
  const articlesData = [
    {
      id: 1,
      category: "MOTION DESIGN",
      title: "2025-yilda motion dizayn tendensiyalari: AI va 3D integratsiyasi",
      date: "12 May 2025",
      readTime: "8 daqiqa o'qish",
      // Masalan, shu rasm URL manzili backenddan keladi
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=600&auto=format&fit=crop", 
      isLarge: true // Birinchi kartani vizual jihatdan katta qilish uchun flag
    },
    {
      id: 2,
      category: "COLOR GRADING",
      title: "Kinematik rang qo'llash sirlari",
      date: "5 May 2025",
      readTime: "5 daqiqa",
      // Rangli rasm
      image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=600&auto=format&fit=crop",
      isLarge: false
    },
    {
      id: 3,
      category: "TUTORIAL",
      title: "After Effects da 3D text animatsiya",
      date: "28 Apr 2025",
      readTime: "6 daqiqa",
      // After Effects'ga yaqin rasm
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
      isLarge: false
    }
  ];

  return (
    <section className="articles">
      <div className="container">
        {/* Sarlavha qismi */}
        <h2 className="articles__title">
          So'nggi <span>maqolalar</span>
        </h2>

        {/* Grid konteyner */}
        <div className="articles__grid">
          {articlesData.map((article) => (
            <article 
              key={article.id} 
              className={`articles__card card ${article.isLarge ? 'card--large' : ''}`}
            >
              {/* Rasm joylashadigan yuqori blok (Inline style yordamida fonda rasm) */}
              <div 
                className="card__img-box" 
                style={{ backgroundImage: `url(${article.image})` }}
              >
                {/* Eski bgText o'chirib tashlandi */}
              </div>

              {/* Ma'lumotlar qismi */}
              <div className="card__content">
                <span className="card__category">{article.category}</span>
                <h3 className="card__card-title">{article.title}</h3>
                <div className="card__meta">
                  <span className="card__date">{article.date}</span>
                  <span className="card__dot">•</span>
                  <span className="card__time">{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;