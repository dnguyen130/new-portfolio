import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import styles from "./hero.module.css";
import "swiper/css";

const container = {
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ease: "easeOut", duration: 1 },
  },
};

export default function Hero(): ReactElement {
  return (
    <div className={styles.hero}>
      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 variants={item}>Hi, I'm</motion.h3>
        <motion.h1 variants={item}>Danny Nguyen</motion.h1>
        <motion.div variants={item}>
          <Swiper
            className={styles.hero_swiper}
            modules={[Autoplay]}
            freeMode={true}
            direction="vertical"
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
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
        </motion.div>
        <motion.p variants={item}>Creating content for the web.</motion.p>
        <motion.p variants={item}>
          Currently working on projects while seeking career opportunities.
        </motion.p>
      </motion.div>
    </div>
  );
}
