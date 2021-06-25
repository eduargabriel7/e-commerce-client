// imported modules
import { useRouter } from 'next/router'
import Image from 'next/image';
import {
   XIcon, ChevronLeftIcon, ChevronRightIcon
} from '@heroicons/react/outline';
import cartActions from 'redux/cart/cartActions';

// create component
const CartProduct = ({ product }) => {

   // next hooks
   const router = useRouter();

   // render
   return (
      <div
         className="relative sm:h-36 h-48 flex sm:flex-row flex-col
         border border-gray-500 border-opacity-30 rounded-md p-4"
      >
         {/* image */}
         <div
            onClick={() => router.push(`/product/${product.id}`)}
            className="sm:w-3/12 w-full sm:h-full h-2/5 relative cursor-pointer"
         >
            <Image
               src={product.image} alt="product-image"
               layout="fill" objectFit="contain"
            />
         </div>

         {/* title */}
         <div
            onClick={() => router.push(`/product/${product.id}`)}
            className="sm:w-5/12 sm:h-full w-full h-1/5 flex items-center"
         >
            <p
               className="sm:mx-0 mx-auto truncate hover:underline cursor-pointer
               md:text-lg text-sm md:font-medium"
            >
               {product.title}
            </p>
         </div>

         {/* quantity */}
         <div className="sm:w-2/12 flex items-center justify-center space-x-2">

            {/* increase */}
            <button
               onClick={() => cartActions.decreaseQuantity(product)}
               disabled={product.quantity < 2 && true}
               className={`${product.quantity < 2 && ' opacity-60'} 
               rounded-full button hover-active-gray`}
            >
               <ChevronLeftIcon className="md:h-9 h-8 p-2 text-blue-600" />
            </button>

            {/* number */}
            <p className="md:text-base font-roboto font-medium text-icon">{product.quantity}</p>

            {/* decrease */}
            <button
               onClick={() => cartActions.increaseQuantity(product)}
               disabled={product.quantity > 9 && true}
               className={`${product.quantity > 9 && ' opacity-60'} 
               rounded-full button hover-active-gray`}
            >
               <ChevronRightIcon className="md:h-9 h-8 p-2 text-blue-600" />
            </button>
         </div>

         {/* price */}
         <p
            className="sm:w-2/12 w-full sm:h-full h-1/5 flex items-center justify-center
            sm:text-base font-roboto font-medium text-icon truncate"
         >
            $ {product.price * product.quantity}
         </p>

         {/* remove button */}
         <XIcon
            onClick={() => cartActions.removeToCart(product)}
            className="absolute sm:top-2 sm:right-2 top-1 right-1
            button h-8 p-2 hover-active-gray rounded-full text-icon"
         />

      </div>
   )
}

// export component
export default CartProduct;
