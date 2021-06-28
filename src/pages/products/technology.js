// imported modules
import { useQuery } from '@apollo/client';
import GET_PRODUCTS_BY_CATEGORY from 'graphql/products/productsQuery/getProductsByCategory';
import TechnologyPage from 'components/CategoriesPages/TechnologyPage';

// create component
const Technology = () => {

   // graphql query
   const { loading, error, data } = useQuery(
      GET_PRODUCTS_BY_CATEGORY,
      { variables: { category: 'technology' } }
   );

   if (loading) return (
      <div
         className="max-w-screen-xl mx-auto md:pt-24 pt-16 md:pb-72 pb-56
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
      <TechnologyPage products={data.getProductsByCategory} />
   )
}

// export component
export default Technology;
