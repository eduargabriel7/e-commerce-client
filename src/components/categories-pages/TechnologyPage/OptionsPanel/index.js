// imported modules
import { useRouter } from 'next/router';

// create component
const OptionsPanel = () => {

   // next hooks
   const router = useRouter();

   // render
   return (
      <div className="hidden md:flex flex-col space-y-2 xl:w-80 w-64 h-112 text-icon pt-4">

         {/* category */}
         <p
            className="w-min p-2 md:text-base font-semibold text-blue-700"
         >
            Technology
         </p>

         {/* divider */}
         <div className="divider-gray w-full"></div>

         {/* Computers */}
         <p
            onClick={() => router.push(`/categories/technology/computers`)}
            className="md:text-base font-medium p-2 button hover-active-gray
            rounded-md w-min"
         >
            Computers
         </p>

         {/* Notebooks */}
         <p
            onClick={() => router.push(`/categories/technology/notebooks`)}
            className="md:text-base font-medium p-2 button hover-active-gray
               rounded-md w-min"
         >
            Notebooks
         </p>

         {/* cell phones */}
         <p
            onClick={() => router.push(`/categories/technology/cellphones`)}
            className="md:text-base font-medium p-2 button hover-active-gray
               rounded-md w-min whitespace-nowrap"
         >
            Cell Phones
         </p>

         {/* gaming */}
         <p
            onClick={() => router.push(`/categories/technology/gaming`)}
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
