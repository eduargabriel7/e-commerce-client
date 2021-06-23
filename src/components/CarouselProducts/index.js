// imported modules
import Slider from "react-slick";
import ProductItem from 'components/ProductItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const NextArrow = ({ onClick }) => {
   return (
      <ChevronRightIcon
         className="absolute right-4 top-36 h-10 p-2 rounded-full 
         hover-active-gray hidden md:block"
         onClick={onClick}
      />
   );
}

const PrevArrow = ({ onClick }) => {
   return (
      <ChevronLeftIcon
         className="absolute z-50 left-4 top-36 h-10 p-2 rounded-full 
         hover-active-gray hidden md:block"
         onClick={onClick}
      />
   );
}


// create component
const CarouselProducts = ({ products }) => {

   const settings = {
      autoplay: true,
      pauseOnHover: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 600,
            settings: {
               autoplay: false,
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 380,
            settings: {
               autoplay: false,
               slidesToShow: 1,
               slidesToScroll: 1
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
