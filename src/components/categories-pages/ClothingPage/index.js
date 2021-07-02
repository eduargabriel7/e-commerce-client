// imported modules
import { useQuery } from '@apollo/client';
import GET_PRODUCTS_BY_CATEGORY from 'graphql/products/productsQuery/getProductsByCategory';
import OptionsPanel from './OptionsPanel';
import OptionsBar from './OptionsBar';
import ProductsList from '../shared-components/ProductsList';
import ProductsListLoading from '../shared-components/ProductsListLoading';
import ClientSideRendering from 'components/shared-components/ClientSideRendering';

// create component
const ClothingPage = ({ categories }) => {

   // graphql query
   const { loading, error, data } = useQuery(
      GET_PRODUCTS_BY_CATEGORY,
      { variables: { category: categories } }
   );

   // render
   return (
      <div
         className="max-w-screen-xl mx-auto md:pt-28 pt-20 md:pb-72 pb-56 px-4
         flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-2"
      >
         {/* panel */}
         <OptionsPanel />

         {/* bar */}
         <OptionsBar />

         {/* products section */}
         <ClientSideRendering>
            {
               loading &&
               <ProductsListLoading />
            }
            {
               error &&
               <p>{error}</p>
            }
            {
               data &&
               <ProductsList products={data.getProductsByCategory} />
            }
         </ClientSideRendering>
      </div>
   )
}

// export component
export default ClothingPage;
