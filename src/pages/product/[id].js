// imported modules
import ProductPage from 'components/main-pages/ProductPage';

// create page
const Product = ({ productId }) => {

   // render
   return (
      <ProductPage productId={productId} />
   )
}

// server side rendering
export async function getServerSideProps(context) {
   // dynamic route parameter
   const productId = context.params.id;
   // return props in server side
   return {
      props: {
         productId
      },
   }
}


// export page
export default Product;
