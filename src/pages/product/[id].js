// imported modules
import ProductPage from 'components/ProductPage';

// create page
const Product = ({ product }) => {

   // render
   return (
      <ProductPage product={product} />
   )
}

// server side rendering props
export async function getServerSideProps({ params }) {

   const product = await fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(res => res.json());

   return {
      props: { product },
   }
}

// export page
export default Product;
