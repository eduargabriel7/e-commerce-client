import React from 'react'

// create component
const ProductItem = () => {

   // render
   return (
      <div
         className="md:h-40 h-32 sm:p-2 p-2 relative flex rounded-md bg-paper"
      >
         {/* image loading */}
         <div className="w-2/6 h-full flex items-center justify-center">
            <div className="md:h-28 h-16 md:w-28 w-16 bg-default rounded-full animate-pulse">
            </div>
         </div>

         {/* info */}
         <div className="w-4/6 flex flex-col justify-around p-4">
            {/* title */}
            <p className="md:w-3/4 w-full md:h-8 h-5 bg-default rounded-lg animate-pulse">
            </p>
            {/* price */}
            <p className="w-2/5 md:h-8 h-5 bg-default rounded-lg animate-pulse">
            </p>
         </div>
      </div>
   )
}

// create component
const ProductsListLoading = () => {

   // render
   return (
      <div className="w-full flex flex-col md:space-y-4 space-y-2">
         <ProductItem />
         <ProductItem />
         <ProductItem />
         <ProductItem />
         <ProductItem />
      </div>
   )
}

// export component
export default ProductsListLoading;
