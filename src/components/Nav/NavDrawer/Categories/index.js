// imported modules
import { useRouter } from 'next/router';
import {
   CollectionIcon, ChevronDownIcon,
   DesktopComputerIcon, ShoppingBagIcon
} from '@heroicons/react/outline';

// create component
const Categories = ({
   onCategoriesClick,
   openCategories,
   menuAnimation,
   onDrawerClose
}) => {

   // next hooks
   const router = useRouter();

   // render
   return (
      <>
         <button
            onClick={onCategoriesClick}
            className="flex items-center space-x-2 py-3 sm:px-4 px-2 button hover-active-gray"
         >
            <CollectionIcon className="button sm:h-10 h-9 p-2 text-icon" />
            <p className="sm:text-base font-medium flex-grow text-left">
               Categories
            </p>
            <ChevronDownIcon className="button sm:h-10 h-9 p-2 text-icon" />
         </button>

         {/* categories drawer */}
         {
            openCategories &&
            <div
               className={`flex flex-col overflow-hidden
               ${menuAnimation === 'open' && 'animate-expand-height'}
               ${menuAnimation === 'close' && 'animate-collapse-height'}`}
            >

               {/* divider */}
               <div className="divider-gray"></div>

               <button
                  onClick={() => {
                     router.push('/products/technology');
                     onDrawerClose();
                  }}
                  className="flex items-center space-x-2 py-3 md:px-6 px-4 button hover-active-gray"
               >
                  <DesktopComputerIcon className="button sm:h-10 h-9 p-2 text-icon" />
                  <p className="sm:text-base font-medium">Technology</p>
               </button>
               <button
                  className="flex items-center space-x-2 py-3 md:px-6 px-4 button hover-active-gray"
               >
                  <ShoppingBagIcon className="button sm:h-10 h-9 p-2 text-icon" />
                  <p className="sm:text-base font-medium">Clothing</p>
               </button>

               {/* divider */}
               <div className="divider-gray"></div>
            </div>
         }
      </>
   )
}

// export component
export default Categories;
