// imported modules
import {
   ChevronLeftIcon, ChevronRightIcon
} from '@heroicons/react/outline';

// create component
const QuantityOption = ({ product }) => {

   // render
   return (
      <>
         {/* increase */}
         <button
            onClick={() => cartActions.decreaseQuantity(product)}
            disabled={product.quantity < 2 && true}
            className={`${product.quantity < 2 && ' opacity-40'} 
            rounded-full button hover-active-gray`}
         >
            <ChevronLeftIcon className="md:h-9 h-8 p-2 text-blue-700" />
         </button>

         {/* number */}
         <p className="md:text-base font-roboto font-medium text-icon">{product.quantity}</p>

         {/* decrease */}
         <button
            onClick={() => cartActions.increaseQuantity(product)}
            disabled={product.quantity > 9 && true}
            className={`${product.quantity > 9 && ' opacity-40'} 
            rounded-full button hover-active-gray`}
         >
            <ChevronRightIcon className="md:h-9 h-8 p-2 text-blue-700" />
         </button>
      </>
   )
}

// export component
export default QuantityOption;
