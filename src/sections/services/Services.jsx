import React from 'react';
import { Play, Triangle, Target, Video, Home, AlertTriangle } from 'lucide-react';
import './Services.css';
import Container from '../../Hoc/container';

// Ma'lumotlar arrayi (Data)
const servicesData = [
  {
    id: "01",
    title: "Video Montaj",
    description: "Professional video editing with cinematic color grading. Adobe Premiere Pro va DaVinci Resolve.",
    icon: <Play size={24} strokeWidth={1.2} />
  },
  {
    id: "02",
    title: "Motion Graphics",
    description: "2D/3D motion design, logo animation, title sequences. After Effects va Cinema 4D.",
    icon: <Triangle size={24} strokeWidth={1.2} />
  },
  {
    id: "03",
    title: "3D Animatsiya",
    description: "Mahsulot vizualizatsiyasi, arxitektura ko'rinishlari va brend filmlar uchun 3D.",
    icon: <Target size={24} strokeWidth={1.2} />
  },
  {
    id: "04",
    title: "Korporativ Video",
    description: "Kompaniya tarixi, mahsulot prezentatsiyasi, reklama roliklar va brand story.",
    icon: <Video size={24} strokeWidth={1.2} />
  },
  {
    id: "05",
    title: "Social Media Kontent",
    description: "Instagram Reels, TikTok, YouTube Shorts — formatga moslashtirilgan dizayn.",
    icon: <Home size={24} strokeWidth={1.2} />
  },
  {
    id: "06",
    title: "VFX va Compositing",
    description: "Visual effektlar, green screen, particle systems va advanced compositing.",
    icon: <AlertTriangle size={24} strokeWidth={1.2} />
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <Container>
        <div className="services-header">
        <h2 className="services-title">Nima qila olaman</h2>
        <p className="services-subtitle">
          Har bir xizmat — brendingizni yangi bosqichga olib chiqish uchun.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={service.id} data-aos="fade-up" data-aos-delay={index*100} className="service-card hover-target">
            <div className="card-number">{service.id}</div>
            <div className="card-icon">{service.icon}</div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
};

export default Services;