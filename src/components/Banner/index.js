// imported modules
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import image1 from 'assets/image-1.jpg';
import image2 from 'assets/image-2.jpg';
import image3 from 'assets/image-3.jpg';

// create component
const Banner = () => {

   // render
   return (
      <Carousel
         infiniteLoop
         autoPlay
         interval={5000}
         showThumbs={false}
         showStatus={false}
      >
         <div className="lg:max-h-112 md:max-h-72 max-h-60 flex items-center">
            <Image
               src={image1} alt="banner-picture"
            />
         </div>
         <div className="lg:max-h-112 md:max-h-72 max-h-60 flex items-center">
            <Image
               src={image2} alt="banner-picture"
            />
         </div>
         <div className="lg:max-h-112 md:max-h-72 max-h-60 flex items-center">
            <Image
               src={image3} alt="banner-picture"
            />
         </div>
      </Carousel>
   )
}

// export component
export default Banner;
