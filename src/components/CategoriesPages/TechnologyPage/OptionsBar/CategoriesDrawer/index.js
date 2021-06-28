// imported modules


// create component
const CategoriesDrawer = ({
   openCategories,
   drawerAnimation
}) => {

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
               <button
                  className="p-4"
               >
                  <p>Notebooks</p>
               </button>
               <button
                  className="p-4"
               >
                  <p>Computers</p>
               </button>
               <button
                  className="p-4"
               >
                  <p>Cell Phones</p>
               </button>
               <button
                  className="p-4"
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
