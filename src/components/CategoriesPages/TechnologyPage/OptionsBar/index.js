// imported modules
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import CategoriesDrawer from './CategoriesDrawer';

// create component
const OptionsBar = () => {

   // state component
   const [openCategories, setOpenCategories] = useState(false);
   const [drawerAnimation, setDrawerAnimation] = useState('open');

   // on categories click
   const onCategoriesClick = () => {
      if (openCategories) {
         setDrawerAnimation('close');
         setTimeout(() => setOpenCategories(false), 400)
      }
      else {
         setDrawerAnimation('open');
         setOpenCategories(true);
      }
   }

   // on close drawer
   const onCloseDrawer = () => {
      setDrawerAnimation('close');
      setTimeout(() => setOpenCategories(false), 400)
   }

   // render
   return (
      <>
         {/* bar */}
         <div className="w-full h-10 px-4 flex relative md:hidden rounded-md bg-paper shadow">

            {/* categories */}
            <div className="flex items-center">
               <button
                  onClick={onCategoriesClick}
                  onBlur={onCloseDrawer}
                  className="px-2 flex items-center ms:space-x-2 rounded-md bg-paper"
               >
                  <p className="md:text-lg font-medium">Categories</p>
                  <ChevronDownIcon
                     className="h-8 text-icon p-2 rounded-full button hover-active-gray"
                  />
               </button>

               {/* drawer */}
               <CategoriesDrawer
                  openCategories={openCategories}
                  drawerAnimation={drawerAnimation}
               />
            </div>

         </div>
      </>
   )
}

// export component
export default OptionsBar;
