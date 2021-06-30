// imported modules
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import GET_PRODUCT from 'graphql/products/productsQuery/getProduct';
import ProductPage from 'components/main-pages/ProductPage';

// create page
const Product = () => {

   // next hooks
   const router = useRouter();
   const productId = router.query.id;

   // graphql query
   const { loading, error, data } = useQuery(
      GET_PRODUCT,
      { variables: { productId } }
   );

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
         {error.message}
      </div>
   )

   // render
   return (
      <ProductPage product={data.getProduct} />
   )
}


// export page
export default Product;
