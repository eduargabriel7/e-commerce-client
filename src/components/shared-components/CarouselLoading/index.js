// imported modules
import Slider from "react-slick";

// create component
const CarouselItem = () => {

   // render
   return (
      <div
         className="md:h-80 h-52 md:p-4 p-2 md:m-4 m-2 
         flex flex-col justify-between bg-paper rounded-md shadow"
      >
         {/* image */}
         <div className="h-3/5 bg-default rounded-lg animate-pulse"></div>
         {/* info */}
         <p className="w-1/4 md:h-6 h-4 bg-default rounded-lg animate-pulse"></p>
         <div className="w-3/4 md:h-6 h-4 bg-default rounded-lg animate-pulse"></div>
         {/* tools */}
         <p className="w-1/4 md:h-6 h-4 bg-default rounded-lg animate-pulse"></p>
      </div>
   )
}

// create component
const CarouselLoading = () => {

   // carousel settings
   const settings = {
      slidesToShow: 4,
      arrows: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
         },
         {
            breakpoint: 500,
            settings: { slidesToShow: 2 }
         }
      ]
   };

   // render
   return (
      <Slider {...settings}>
         <CarouselItem />
         <CarouselItem />
         <CarouselItem />
         <CarouselItem />
      </Slider>
   )
}

// export component
export default CarouselLoading;
