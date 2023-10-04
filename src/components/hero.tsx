import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { TbChevronsDown } from "react-icons/tb";

import styles from "./hero.module.css";
import stars from "@/assets/stars.jpg";
import "swiper/css";

export default function Hero(): ReactElement {
  return (
    <>
      <div
        className={styles.container_background}
        style={{ backgroundImage: `url(${stars})` }}
      />
      <div className={styles.container}>
        <h3>Hi, I'm</h3>
        <h1>Danny Nguyen</h1>
        <Swiper
          modules={[Autoplay]}
          freeMode
          direction="vertical"
          spaceBetween={50}
          slidesPerView={1}
          loop
          speed={400}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <h2>web developer</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>full stack developer</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>UI / UX developer</h2>
          </SwiperSlide>
        </Swiper>
        <p>Creating content for the web.</p>
        <p>Currently working on projects while seeking career opportunities.</p>
      </div>
      <a className={styles.next_page} href="#about">
        <TbChevronsDown size="100%" />
      </a>
    </>
  );
}
