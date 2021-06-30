// imported modules
import Slider from "react-slick";
import ProductItem from './ProductItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const NextArrow = ({ onClick }) => {
   return (
      <ChevronRightIcon
         className="absolute right-4 top-36 h-10 p-2 rounded-full 
         hover-active-gray hidden md:block text-icon"
         onClick={onClick}
      />
   );
}

const PrevArrow = ({ onClick }) => {
   return (
      <ChevronLeftIcon
         className="absolute z-30 left-4 top-36 h-10 p-2 rounded-full 
         hover-active-gray hidden md:block text-icon"
         onClick={onClick}
      />
   );
}


// create component
const CarouselProducts = ({ products }) => {

   const settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      infinite: true,
      slidesToShow: 4,
      swipeToSlide: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 500,
            settings: {
               autoplay: false,
               slidesToShow: 2,
            }
         }
      ]
   };

   // render
   return (
      <Slider {...settings}>
         {
            products.map(product => (
               <ProductItem key={product.id} product={product} />
            ))
         }
      </Slider>
   )
}

// export component
export default CarouselProducts;
