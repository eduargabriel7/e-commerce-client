// imported modules
import Image from 'next/image'
import Slider from "react-slick";
import image1 from 'assets/image-1.jpg';
import image2 from 'assets/image-2.jpg';
import image3 from 'assets/image-3.jpg';
import {
   ChevronLeftIcon, ChevronRightIcon
} from '@heroicons/react/outline';

// create component
const NextArrow = ({ onClick }) => {
   return (
      <ChevronRightIcon
         className="absolute z-30 right-4 lg:top-48 md:top-40 h-10 p-2 rounded-full 
         hover-active-black text-white"
         onClick={onClick}
      />
   );
}

// create component
const PrevArrow = ({ onClick }) => {
   return (
      <ChevronLeftIcon
         className="absolute z-30 left-4 lg:top-48 md:top-40 h-10 p-2 rounded-full 
         hover-active-black text-white"
         onClick={onClick}
      />
   );
}

// create component
const Banner = () => {

   // slider settings
   const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      infinite: true,
      slidesToShow: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               arrows: false
            }
         },
      ]
   }

   // images
   const images = [image1, image2, image3]

   // render
   return (
      <Slider {...settings}>
         {
            images.map(image => (
               <div
                  key={image}
                  className="relative lg:h-112 md:h-96 sm:h-72 h-52 bg-paper"
               >
                  <Image
                     src={image.src} priority
                     layout="fill" objectFit="cover"
                  />
               </div>
            ))
         }
      </Slider>
   )
}

// export component
export default Banner;
