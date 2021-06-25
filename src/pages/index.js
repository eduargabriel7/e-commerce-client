// imported modules
import Banner from 'components/Banner';
import CarouselProducts from 'components/CarouselProducts';

// create page
const Home = ({ products }) => {

   // render
   return (
      <>
         <div
            className="max-w-screen-xl mx-auto pb-10
            flex flex-col md:space-y-20 space-y-10"
         >
            <Banner />
            <CarouselProducts products={products} />
         </div>
      </>
   )
}

// server side rendering props
export async function getServerSideProps(context) {

   const products = await fetch('https://fakestoreapi.com/products')
      .then(res => res.json());

   return {
      props: { products },
   }
}

// export page
export default Home;