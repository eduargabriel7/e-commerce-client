// imported modules

// create component
const ProductSectionLoading = () => {

   // render
   return (
      <div
         className="w-full rounded-md flex md:flex-row flex-col
         md:space-x-6 md:space-y-0 space-y-2 items-center p-2"
      >
         {/* image loading */}
         <div
            className="md:h-80 sm:h-60 h-48 md:w-1/3 w-4/5
            flex items-center justify-center"
         >
            <div className="md:h-60 h-44 md:w-60 w-44 rounded-full bg-paper animate-pulse"></div>
         </div>
         {/* info loading */}
         <div
            className="flex flex-col md:space-y-5 space-y-3 md:w-2/3 w-full md:min-h-80 md:py-2"
         >
            {/* title loading */}
            <p className="md:w-104 w-60 md:h-8 h-4 bg-paper rounded-lg animate-pulse">
            </p>

            {/* price loading */}
            <p className="md:w-48 w-24 md:h-8 h-4 bg-paper rounded-lg animate-pulse">
            </p>

            {/* description loading */}
            <p className="w-full md:h-8 h-4 bg-paper rounded-lg animate-pulse">
            </p>
            <p className="w-full md:h-8 h-4 bg-paper rounded-lg animate-pulse">
            </p>
            <p className="md:w-48 w-24 md:h-8 h-4 bg-paper rounded-lg animate-pulse">
            </p>
         </div>
      </div>
   )
}

// export component
export default ProductSectionLoading;
