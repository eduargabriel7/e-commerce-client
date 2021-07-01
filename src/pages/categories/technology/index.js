// imported modules
import apolloClient from 'graphql/apolloClient';
import GET_PRODUCTS_BY_CATEGORY
   from 'graphql/products/productsQuery/getProductsByCategory';
import TechnologyPage from 'components/categories-pages/TechnologyPage';

// create component
const Technology = ({ products }) => {

   // render
   return (
      <TechnologyPage products={products} />
   )
}

// server side rendering
export async function getServerSideProps() {
   // graphql query
   const { data } = await apolloClient.query({
      query: GET_PRODUCTS_BY_CATEGORY,
      variables: { category: 'technology' }
   })
   // return props in server side
   return {
      props: {
         products: data.getProductsByCategory,
      },
   }
}

// export component
export default Technology;