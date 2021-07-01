// imported modules
import apolloClient from 'graphql/apolloClient';
import GET_PRODUCTS_BY_CATEGORY
   from 'graphql/products/productsQuery/getProductsByCategory';
import ClothingPage from 'components/categories-pages/ClothingPage';

// create component
const ClothingSubCategory = ({ products }) => {

   // render
   return (
      <ClothingPage products={products} />
   )
}

// server side rendering
export async function getServerSideProps(context) {
   // dynamic route parameter
   const categoriesArray = context.params.category;
   console.log(categoriesArray.join(' '));
   // graphql query
   const { data } = await apolloClient.query({
      query: GET_PRODUCTS_BY_CATEGORY,
      variables: { category: categoriesArray.join(' ') }
   })
   // return props in server side
   return {
      props: {
         products: data.getProductsByCategory,
      },
   }
}

// export component
export default ClothingSubCategory;