import './Corusel.css';
import '../Header.css'
import Section1SliderItem from './CoruselItem';

//=============== Import required modules===============//
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useEffect, useState, useRef } from 'react';

//=============== Swiper =============== //
// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Section1({items}) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  function handleSlideChange(swiper) {
    const currentIndex = swiper.realIndex;
    setActiveSlideIndex(currentIndex);
  }

  return (
    <div className='section1'>
      <Swiper
          speed={1500}
          centeredSlides={true}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Section1SliderItem {...item} isActive={index === activeSlideIndex}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}