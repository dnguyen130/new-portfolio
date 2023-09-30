import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "./hero.module.css";
import "swiper/css";

export default function Hero(): ReactElement {
  return (
    <header className={styles.container}>
      <h1>Danny Nguyen</h1>
      <h2>I am a</h2>
      <Swiper
        modules={[Autoplay]}
        freeMode
        spaceBetween={50}
        slidesPerView={1}
        loop
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <h2>web developer</h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>front end developer</h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>back end developer</h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>full stack developer</h2>
        </SwiperSlide>
      </Swiper>
      <p>Helping you bring your ideas to life.</p>
      <p>Currently working on projects while seeking career opportunities.</p>
    </header>
  );
}
