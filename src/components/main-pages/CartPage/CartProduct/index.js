// imported modules
import { useRouter } from 'next/router'
import Image from 'next/image';
import { XIcon } from '@heroicons/react/outline';
import cartActions from 'redux/cart/cartActions';
import QuantityOption from './QuantityOption';

// create component
const CartProduct = ({ product }) => {

   // next hooks
   const router = useRouter();

   // render
   return (
      <div
         className="md:h-36 h-28 md:p-4 p-2 flex flex-row space-x-2
         relative rounded-md bg-paper shadow"
      >
         {/* image */}
         <div
            onClick={() => router.push(`/product/${product.id}`)}
            className="w-3/12 h-full relative cursor-pointer"
         >
            <Image
               src={product.image} alt="product-image"
               layout="fill" objectFit="contain"
            />
         </div>

         {/* title */}
         <div
            onClick={() => router.push(`/product/${product.id}`)}
            className="w-5/12 flex items-center"
         >
            <p
               className="truncate cursor-pointer md:text-lg text-sm"
            >
               {product.title}
            </p>
         </div>

         {/* quantity and price */}
         <div className="w-4/12 h-full flex sm:flex-row flex-col items-center justify-center">

            {/* quantity */}
            <div className="sm:w-1/2 w-full flex items-center justify-center md:space-x-2">
               <QuantityOption product={product} />
            </div>

            {/* price */}
            <div
               className="sm:w-1/2 w-full flex items-center justify-center"
            >
               <p className="md:text-base font-roboto font-medium text-icon truncate">
                  $ {product.price * product.quantity}
               </p>
            </div>
         </div>

         {/* remove button */}
         <XIcon
            onClick={() => cartActions.removeToCart(product)}
            className="absolute md:top-2 md:right-2 top-1 right-1
            button h-8 p-2 hover-active-gray rounded-full text-icon"
         />

      </div>
   )
}

// export component
export default CartProduct;
