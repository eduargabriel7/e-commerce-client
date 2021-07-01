// imported modules
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import GET_PRODUCTS_BY_CATEGORY from 'graphql/products/productsQuery/getProductsByCategory';
import OptionsPanel from './OptionsPanel';
import OptionsBar from './OptionsBar';
import ProductsList from '../shared-components/ProductsList';

// create component
const ClothingPage = ({ products }) => {

   // render
   return (
      <div
         className="max-w-screen-xl mx-auto md:pt-28 pt-20 md:pb-72 pb-56 px-4
         flex md:space-x-6"
      >
         {/* panel */}
         <OptionsPanel />

         {/* bar */}
         <OptionsBar />

         {/* products */}
         <ProductsList products={products} />
      </div>
   )
}

// export component
export default ClothingPage;
