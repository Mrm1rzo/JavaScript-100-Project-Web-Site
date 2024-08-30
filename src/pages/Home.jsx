import React from "react";
import Carousel from "react-bootstrap/Carousel";

// images
import home from "../images/home.png";
import javascript from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";

const Home = () => {
  return (
    <section id="home-section">
      <Carousel
        data-bs-theme="dark"
        controls={false}
        prevLabel="sdsds"
        className="home-content container"
      >
        <Carousel.Item className="home-corusel__back">
          {/* <img classNam e="d-block w-100" src={javascript} alt="First slide" /> */}
          <Carousel.Caption className="home-corusel__front">
            <h1 className="home-corusel__front-title">
              Veb dasturchilar uchun 100 ta JavaScript loyihasi
            </h1>
            <p className="home-corusel__front-subtitle">
              Veb dasturlashda ko'nikmalaringizni oshirish uchun HTML, CSS va
              JavaScript bilan yaratilgan 50 dan ortiq yangi boshlanuvchilar
              uchun qulay loyihalarni o'rganing
            </p>
            <div className="home-corusel__front-img__box">
              <img
                width="150"
                src={html}
                alt=""
                className="home-corusel__front-img"
              />
              <img
                width="150"
                src={css}
                alt=""
                className="home-corusel__front-img"
              />
              <img
                width="150"
                src={javascript}
                alt=""
                className="home-corusel__front-img"
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Home;
