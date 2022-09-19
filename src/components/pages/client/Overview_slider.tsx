import React, { Fragment } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper';

const Overview_slider = () => {
  return (
    <Fragment>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/static/images/placeholders/covers/7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/images/placeholders/covers/7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/images/placeholders/covers/7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/images/placeholders/covers/7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/images/placeholders/covers/7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/images/placeholders/covers/7.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
};

export default Overview_slider;
