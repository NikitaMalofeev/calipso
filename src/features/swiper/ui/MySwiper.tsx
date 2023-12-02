import React, { useState, useRef } from "react";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderItems } from "../../../shared/config/initialProductSlider";

const MySwiper = () => {
  // состояние для отслеживания индекса слайдера для изменения стилей текущего
  const [slideIndex, setSlideIndex] = useState(0);
  // реф для контроля слайдера точками
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    swipeToSlide: true,
    arrows: false,
    dots: true,
    beforeChange: (current: number, next: number) => {
      setSlideIndex(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul style={{ padding: "0", margin: "0" }}>
          {sliderItems.map((item, index) => (
            <li
              style={{width: "10px"}}
              key={index}
              className={`${
                slideIndex === index ? styles.dots__active : styles.slider__dots
              }`}
              onClick={() => {
                setSlideIndex(index);
                if (sliderRef.current) {
                  sliderRef.current.slickGoTo(index);
                }
              }}
            ></li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings} ref={sliderRef}>
        {sliderItems.map((item, index) => (
          <div className={styles.slide__container} key={index}>
            <div
              className={
                index === slideIndex
                  ? `${styles.slide} ${styles.slide__active}`
                  : styles.slide
              }
            >
              {/* Содержимое для слайда */}
              <div className={styles.slide__info}>
                <p className={styles.slide__date}>{item.date}</p>
                <h3 className={styles.slide__title}>{item.title}</h3>
                <p className={styles.slide__description}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { MySwiper };
