// imported modules
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import SEARCH_PRODUCTS from 'graphql/products/productsQuery/searchProducts';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
   SearchIcon, ChevronLeftIcon
} from '@heroicons/react/outline'

// create component
const Searcher = () => {

   // next hooks
   const router = useRouter();

   // state component
   const [openDrawer, setOpenDrawer] = useState(false);
   const [drawerAnimation, setDrawerAnimation] = useState('open');
   const [searchInput, setSearchInput] = useState('');

   // graphql query
   const { loading, error, data } = useQuery(
      SEARCH_PRODUCTS,
      { variables: { searchInput } }
   );

   // on input change
   const onInputChange = (event) => {
      setSearchInput(event.target.value);
   }

   // on drawer close
   const onDrawerClose = () => {
      setDrawerAnimation('close');
      setTimeout(() => {
         setOpenDrawer(false);
         setDrawerAnimation('open');
      }, 400);
   }

   // render
   return (
      <>
         {/* searcher */}
         <div
            className="sm:relative w-full md:h-10 h-8 py-1 px-2 flex items-center
            space-x-2 shadow rounded-md"
         >
            <SearchIcon className="md:h-5 h-4 text-gray-500" />
            <input
               onClick={() => setOpenDrawer(true)}
               onBlur={onDrawerClose}
               onChange={onInputChange}
               type="text"
               placeholder="Search"
               className="w-full h-full bg-transparent focus:outline-none placeholder-gray-500
               focus:placeholder-opacity-0"
            />
            {/* drawer */}
            {
               openDrawer && searchInput !== '' &&
               <div
                  className={`absolute md:top-12 sm:top-10 top-16 -left-2
                  w-full sm:h-auto sm:max-h-80 h-screen flex flex-col bg-paper 
                  sm:shadow sm:rounded-b-md sm:overflow-hidden overflow-auto
                  overscroll-contain
                  ${drawerAnimation === 'open' ?
                        'sm:animate-expand-height animate-open-drawer' :
                        'sm:animate-collapse-height animate-close-drawer'}`}
               >
                  {/* divider */}
                  <div className="sm:border-none divider-gray"></div>

                  {/* close responsive drawer */}
                  <ChevronLeftIcon
                     className="sm:hidden absolute top-2 right-2 
                     h-9 p-2 rounded-full button hover-active-gray"
                  />

                  {/* products list */}
                  {
                     data?.searchProducts.map(product => (
                        <div
                           key={product.id}
                           onClick={() => router.push(`/product/${product.id}`)}
                           className="w-full h-16 min-h-16 flex button hover-active-gray p-2"
                        >
                           {/* image */}
                           <div className="relative w-1/5 h-full">
                              <Image
                                 src={product.image} alt="product-image"
                                 layout="fill" objectFit="contain"
                              />
                           </div>
                           <div className="flex flex-col justify-around">
                              <p className="font-medium truncate">{product.title}</p>
                              <p className="font-roboto truncate text-icon">$ {product.price}</p>
                           </div>
                        </div>
                     ))
                  }

               </div>
            }
         </div>
      </>
   )
}

// export component
export default Searcher;
