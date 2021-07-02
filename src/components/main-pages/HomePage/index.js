// imported modules
import { useQuery } from '@apollo/client';
import GET_PRODUCTS_BY_CATEGORY from 'graphql/products/productsQuery/getProductsByCategory';
import CarouselProducts from 'components/shared-components/CarouselProducts';
import CarouselLoading from 'components/shared-components/CarouselLoading';
import ClientSideRendering from 'components/shared-components/ClientSideRendering';
import Banner from './Banner';

// create component
const HomePage = () => {

   // graphql query
   const { loading, error, data } = useQuery(
      GET_PRODUCTS_BY_CATEGORY,
      { variables: { category: 'technology' } }
   );

   // render
   return (
      <div
         className="max-w-screen-xl mx-auto md:pt-20 pt-16 md:pb-64 pb-36
         flex flex-col md:space-y-16 space-y-8"
      >
         {/* banner */}
         <Banner />

         {/* carousel products */}
         <ClientSideRendering>
            {loading && <CarouselLoading />}
            {error && <p>{error}</p>}
            {
               data &&
               <CarouselProducts products={data?.getProductsByCategory} />
            }
         </ClientSideRendering>
      </div>
   )
}

// export component
export default HomePage;
