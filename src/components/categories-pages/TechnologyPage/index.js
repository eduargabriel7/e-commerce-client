// imported modules
import { useQuery } from '@apollo/client';
import GET_PRODUCTS_BY_CATEGORY from 'graphql/products/productsQuery/getProductsByCategory';
import ClientSideRendering from 'components/shared-components/ClientSideRendering';
import TechnologyLayout from './TechnologyLayout';
import ProductsList from '../shared-components/ProductsList';
import ProductsListLoading from '../shared-components/ProductsListLoading';

// create component
const TechnologyPage = ({ categories }) => {

   // graphql query
   const { loading, error, data } = useQuery(
      GET_PRODUCTS_BY_CATEGORY,
      { variables: { category: categories } }
   );


   // render
   return (
      <TechnologyLayout>

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

      </TechnologyLayout>
   )
}

// export component
export default TechnologyPage;
