import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Banner({ carosel }) {
  
   const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplayspeed: 700
   };
   return (
      <Slider {...settings}>
         {carosel.map((item,index) => (
            <div key={index}>
               <img src={item.image_url} alt="Slide 1" />
            </div>
         ))}
      </Slider>
   );
}