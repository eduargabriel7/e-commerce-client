// imported modules
import { useQuery } from '@apollo/client';
import GET_PRODUCTS from 'graphql/products/productsQuery/getProducts';
import HomePage from 'components/HomePage';

// create page
const Home = () => {

   // graphql query
   const { loading, error, data } = useQuery(GET_PRODUCTS, { ssr: false });

   if (loading) return (
      <div
         className="max-w-screen-xl mx-auto md:pt-20 pt-16 md:pb-72 pb-56
         flex flex-col md:space-y-20 space-y-10"
      >
         loading
      </div>
   )

   if (error) return (
      <div
         className="max-w-screen-xl mx-auto md:pt-20 pt-16 md:pb-72 pb-56
         flex flex-col md:space-y-20 space-y-10"
      >
         error
      </div>
   )

   // render
   return (
      <HomePage products={data.getProducts} />
   )
}

// export page
export default Home;