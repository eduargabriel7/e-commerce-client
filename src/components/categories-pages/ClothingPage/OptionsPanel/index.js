// imported modules

// create component
const OptionsPanel = ({ setCategory }) => {

   // render
   return (
      <div className="hidden md:flex flex-col space-y-2 xl:w-80 w-64 h-112 text-icon pt-4">

         {/* category */}
         <p
            className="md:text-lg font-semibold p-2 border-b border-gray-500 
            border-opacity-50 text-blue-700"
         >
            Clothing
         </p>

         {/* Shirts */}
         <p
            onClick={() => setCategory('shirts')}
            className="md:text-base font-medium p-2 button hover-active-gray
            rounded-md w-min"
         >
            Shirts
         </p>

         {/* Jackets */}
         <p
            onClick={() => setCategory('jackets')}
            className="md:text-base font-medium p-2 button hover-active-gray
            rounded-md w-min"
         >
            Jackets
         </p>

         {/* Jeans */}
         <p
            onClick={() => setCategory('jeans')}
            className="md:text-base font-medium p-2 button hover-active-gray
            rounded-md w-min"
         >
            Jeans
         </p>

         {/* Sneakers */}
         <p
            onClick={() => setCategory('sneakers')}
            className="md:text-base font-medium p-2 button hover-active-gray
            rounded-md w-min whitespace-nowrap"
         >
            Sneakers
         </p>

      </div>
   )
}

// export component
export default OptionsPanel;