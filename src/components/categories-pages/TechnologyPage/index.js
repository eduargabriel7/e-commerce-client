// imported modules
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import GET_PRODUCTS_BY_CATEGORY from 'graphql/products/productsQuery/getProductsByCategory';
import OptionsPanel from './OptionsPanel';
import ProductItem from '../ProductItem';
import OptionsBar from './OptionsBar';

// create component
const TechnologyPage = () => {

   // state component
   const [category, setCategory] = useState('computers');

   // graphql query
   const { loading, error, data } = useQuery(
      GET_PRODUCTS_BY_CATEGORY,
      { variables: { category } }
   );

   // render
   return (
      <div
         className="max-w-screen-xl mx-auto md:pt-28 pt-20 md:pb-72 pb-56 px-4
         flex md:space-x-6"
      >
         {/* panel */}
         <OptionsPanel setCategory={setCategory} />

         {/* loading */}
         {
            loading && <p>loading</p>
         }

         {/* error */}
         {
            error && <p>{error}</p>
         }

         {/* main section */}
         {
            data &&
            <div className="w-full flex flex-col md:space-y-4 space-y-2">

               {/* bar */}
               <OptionsBar setCategory={setCategory} />

               {/* products */}
               {
                  data.getProductsByCategory.map(product => (
                     <ProductItem key={product.id} product={product} />
                  ))
               }
            </div>
         }
      </div>
   )
}

// export component
export default TechnologyPage;
