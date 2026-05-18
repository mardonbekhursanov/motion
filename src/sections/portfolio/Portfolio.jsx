import React from 'react'
import "./Portfolio.css"
function Portfolio() {
    const data = [
        {
            id: 1,
            type: "Brand",
            title: "Uzum market launch company",
            link: "https://youtube.com",
            cover: "https://img.freepik.com/free-photo/person-recording-blogger-influencer_1268-21925.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 2,
            type: "Brand",
            title: "Uzum market launch company",
            link: "https://youtube.com",
            cover: "https://img.freepik.com/free-photo/person-recording-blogger-influencer_1268-21925.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 3,
            type: "Brand",
            title: "Uzum market launch company",
            link: "https://youtube.com",
            cover: "https://img.freepik.com/free-photo/person-recording-blogger-influencer_1268-21925.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 4,
            type: "Brand",
            title: "Uzum market launch company",
            link: "https://youtube.com",
            cover: "https://img.freepik.com/free-photo/person-recording-blogger-influencer_1268-21925.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 5,
            type: "Brand",
            title: "Uzum market launch company",
            link: "https://youtube.com",
            cover: "https://img.freepik.com/free-photo/person-recording-blogger-influencer_1268-21925.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 6,
            type: "Brand",
            title: "Uzum market launch company",
            link: "https://youtube.com",
            cover: "https://img.freepik.com/free-photo/person-recording-blogger-influencer_1268-21925.jpg?semt=ais_hybrid&w=740&q=80"
        },
    ]
  return (
    <section className='portfolio'>
        <marquee behavior="left">
            <ul className="portfolio__list">
            <li className="portfolio__item">
                Social Media
            </li>
            <li className="portfolio__item">
                Social Media
            </li>
            <li className="portfolio__item">
                Social Media
            </li>
            <li className="portfolio__item">
                Social Media
            </li>
            <li className="portfolio__item">
                Social Media
            </li>
        </ul>
        </marquee>
        <div className="container">
            <p className="portfolio__text">
                Portfolio
            </p>
            <div className="portfolio__titles">
                <h2 className="portfolio__title">
                    Tanlangan ishlar
                </h2>
                <a href="#all" className="portfolio__link">Barchasi</a>
            </div>
            <div className="portfolio__general parent">
                {
                    data.map((item, index)=> {
                        return <a key={index} href={item.link} className={`portfolio__box div${index+1}`} style={{backgroundImage: `url(${item.cover})`}}>
                            <p className="box__number">0{index+1}</p>
                            <div className="box__row">
                                <p className="row__text">
                                    {item.type}
                                </p>
                                <h3 className="row__title">
                                    {item.title}
                                </h3>
                            </div>
                        </a>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Portfolio
