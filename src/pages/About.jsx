import React from "react";
import Carousel from "react-bootstrap/Carousel";

// images
import javascript from "../images/home.png";

const About = () => {
  return (
    <section id="about-section">
      <Carousel
        data-bs-theme="dark"
        controls={false}
        className="about-content container "
      >
        <Carousel.Item className="about-corusel__back">
          {/* <img className="d-block w-100" src={javascript} alt="First slide" /> */}
          <Carousel.Caption className="home-corusel__front">
            <h1 className="about-corusel__front-title">Salom dasturchi</h1>
            <p className="about-corusel__front-subtitle">
              saytimizga xush kelibsiz, dasturchilarga amaliy loyihalar orqali
              JavaScriptni o'rganish va o'zlashtirishda yordam berishga
              bag'ishlangan. Bizning maqsadimiz sizga o'z mahoratingizni
              oshirish va tajribangizni namoyish etadigan real loyihalarni
              yaratish uchun zarur vositalar va resurslarni taqdim etishdir.
              <br />
              <br />
              Agar siz veb-ishlab chiqishda yangi bo'lsangiz, HTML, CSS va
              JavaScriptdan foydalangan holda 50 ta kichik loyihalarni
              yaratishga yordam beradigan 60 ta HTML CSS JS loyihalari
              kursimizdan boshlashingizni tavsiya qilamiz . Ushbu loyihalar
              sizga veb-ishlab chiqishda mustahkam poydevor yaratadi va sizni
              kutubxonalar va back-end dasturlash kabi ilg'or mavzularga
              tayyorlaydi.
              <br />
              <br />
              Kursni tugatganingizdan so'ng, JavaScriptda yangi tushunchalarni
              o'rganish va o'rganishni davom ettirish uchun 100 ta JS loyihasiga
              qaytishingiz mumkin. Biz muntazam ravishda yangi loyihalar va
              manbalarni qo'shib boramiz, bu sizga yangilanib turish va
              bilimingizni kengaytirishga yordam beradi.
              <br />
              <br />
              Tashrifingiz uchun tashakkur va biz bilan o'rganish sizga yoqadi
              degan umiddamiz!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default About;
