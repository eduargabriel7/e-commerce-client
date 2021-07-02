// imported modules
import { useRouter } from 'next/router';

// create component
const CategoriesDrawer = ({
   openCategories,
   drawerAnimation
}) => {

   // next hooks
   const router = useRouter();

   // render
   return (
      <>
         {
            openCategories &&
            <div
               className={`absolute top-12 left-0 w-48 h-48 shadow z-40 bg-paper
               rounded-md flex flex-col animate-expand-height overflow-hidden
               ${drawerAnimation === 'open' ? 'animate-expand-height' : 'animate-collapse-height'}`}
            >
               {/* shirts */}
               <button
                  onClick={() => router.push(`/categories/clothing/shirts`)}
                  className="p-4 hover-active-gray"
               >
                  <p>T-Shirts</p>
               </button>

               {/* jackets */}
               <button
                  onClick={() => router.push(`/categories/clothing/jackets`)}
                  className="p-4 hover-active-gray"
               >
                  <p>Jackets</p>
               </button>

               {/* jeans */}
               <button
                  onClick={() => router.push(`/categories/clothing/jeans`)}
                  className="p-4 hover-active-gray"
               >
                  <p>Jeans</p>
               </button>

               {/* sneakers */}
               <button
                  onClick={() => router.push(`/categories/clothing/sneakers`)}
                  className="p-4 hover-active-gray"
               >
                  <p>sneakers</p>
               </button>
            </div>
         }
      </>
   )
}

// export component
export default CategoriesDrawer;
