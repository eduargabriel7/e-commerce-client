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
            Clothing
         </p>

         {/* divider */}
         <div className="divider-gray w-full"></div>

         {/* Shirts */}
         <p
            onClick={() => router.push(`/categories/clothing/shirts`)}
            className="md:text-base font-medium p-2 button hover-active-gray
            rounded-md w-min"
         >
            Shirts
         </p>

         {/* Jackets */}
         <p
            onClick={() => router.push(`/categories/clothing/jackets`)}
            className="md:text-base font-medium p-2 button hover-active-gray
            rounded-md w-min"
         >
            Jackets
         </p>

         {/* Jeans */}
         <p
            onClick={() => router.push(`/categories/clothing/jeans`)}
            className="md:text-base font-medium p-2 button hover-active-gray
            rounded-md w-min"
         >
            Jeans
         </p>

         {/* Sneakers */}
         <p
            onClick={() => router.push(`/categories/clothing/sneakers`)}
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