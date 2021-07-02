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
               {/* computers */}
               <button
                  onClick={() => router.push(`/categories/technology/computers`)}
                  className="p-4 hover-active-gray"
               >
                  <p>Computers</p>
               </button>

               {/* notebooks */}
               <button
                  onClick={() => router.push(`/categories/technology/notebooks`)}
                  className="p-4 hover-active-gray"
               >
                  <p>Notebooks</p>
               </button>

               {/* cell phones */}
               <button
                  onClick={() => router.push(`/categories/technology/cellphones`)}
                  className="p-4 hover-active-gray"
               >
                  <p>Cell Phones</p>
               </button>

               {/* gaming */}
               <button
                  onClick={() => router.push(`/categories/technology/gaming`)}
                  className="p-4 hover-active-gray"
               >
                  <p>Gaming</p>
               </button>
            </div>
         }
      </>
   )
}

// export component
export default CategoriesDrawer;
