// imported modules
import Banner from './Banner';
import CarouselProducts from 'components/shared-components/CarouselProducts';

// create component
const HomePage = ({ products }) => {

   // render
   return (
      <div
         className="max-w-screen-xl mx-auto md:pt-20 pt-16 md:pb-72 pb-56
         flex flex-col md:space-y-20 space-y-10"
      >
         <Banner />
         <CarouselProducts products={products} />
      </div>
   )
}

// export component
export default HomePage;
