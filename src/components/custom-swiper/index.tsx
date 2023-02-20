import React, { useState } from 'react';
import { A11y, FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import DesktopPreviewAlgos from '../../assets/img/desktop-preview-algos.png';

import styles from './custom-swiper.module.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const CustomSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <React.Fragment>
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='' />
        </SwiperSlide>
      </Swiper>

      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation]}
        className={styles.mySwiper2}
      >
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1-thumb.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2-thumb.jpg' alt='' />
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
};
