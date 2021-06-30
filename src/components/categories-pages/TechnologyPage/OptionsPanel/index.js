import React from 'react'

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
            Technology
         </p>

         {/* Computers */}
         <p
            onClick={() => setCategory('computers')}
            className="md:text-base font-medium p-2 button hover-active-gray
               rounded-md w-min"
         >
            Computers
         </p>

         {/* Notebooks */}
         <p
            onClick={() => setCategory('notebooks')}
            className="md:text-base font-medium p-2 button hover-active-gray
               rounded-md w-min"
         >
            Notebooks
         </p>

         {/* cell phones */}
         <p
            onClick={() => setCategory('cellphones')}
            className="md:text-base font-medium p-2 button hover-active-gray
               rounded-md w-min whitespace-nowrap"
         >
            Cell Phones
         </p>

         {/* gaming */}
         <p
            onClick={() => setCategory('gamming')}
            className="md:text-base font-medium p-2 button hover-active-gray
               rounded-md w-min whitespace-nowrap"
         >
            Gaming
         </p>

      </div>
   )
}

// export component
export default OptionsPanel;
