import React from 'react'

// create component
const ProductItem = () => {

   // render
   return (
      <div
         className="md:h-40 h-32 sm:p-2 p-2 relative flex rounded-md bg-paper shadow"
      >
      </div>
   )
}

// create component
const ProductsLoading = () => {

   // render
   return (
      <div className="w-full flex flex-col md:space-y-4 space-y-2">
         <ProductItem />
         <ProductItem />
         <ProductItem />
         <ProductItem />
      </div>
   )
}

// export component
export default ProductsLoading;
