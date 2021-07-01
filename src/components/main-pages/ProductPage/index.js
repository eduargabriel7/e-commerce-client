// imported modules
import { useQuery } from '@apollo/client';
import GET_PRODUCT from 'graphql/products/productsQuery/getProduct';
import ClientSideRendering from 'components/shared-components/ClientSideRendering';
import ProductSection from './ProductSection'
import ProductSectionLoading from './ProductSectionLoading';

// create component
const ProductPage = ({ productId }) => {

   // graphql query
   const { loading, error, data } = useQuery(
      GET_PRODUCT,
      { variables: { productId } }
   );

   // render
   return (
      <div
         className="max-w-screen-xl mx-auto md:pt-28 pt-20 md:pb-72 pb-56 md:px-4 px-2"
      >
         <ClientSideRendering>
            {
               loading &&
               <ProductSectionLoading />
            }
            {
               error &&
               <p>{error}</p>
            }
            {
               data &&
               <ProductSection product={data.getProduct} />
            }
         </ClientSideRendering>

      </div>
   )
}

// export component
export default ProductPage;
