// imported modules
import { useRouter } from 'next/router';
import Image from 'next/image';
import cartActions from 'redux/cart/cartActions';

// create layout
const ProductPage = ({ product }) => {

   // next hooks
   const router = useRouter();

   // render
   return (
      <div
         className="max-w-screen-xl mx-auto md:pt-28 pt-20 md:pb-72 pb-56 md:px-4 px-2"
      >
         <div
            className="w-full rounded-md flex md:flex-row flex-col
            md:space-x-6 md:space-y-0 space-y-2 items-center p-2"
         >
            {/* image */}
            <div
               className="relative md:h-80 sm:h-60 h-48 md:w-1/3 w-4/5"
            >
               <Image
                  src={product.image} alt="product-image"
                  layout="fill" objectFit="contain"
               />
            </div>

            {/* info */}
            <div
               className="flex flex-col md:space-y-5 space-y-3 md:w-2/3 w-full md:min-h-80 md:py-2"
            >
               <p className="md:text-3xl text-base">
                  {product.title}
               </p>
               <p className="md:text-2xl text-base">
                  $ {product.price}
               </p>
               <p className="md:text-lg flex-grow">
                  {product.description}
               </p>

               {/* add to cart button */}
               <button
                  onClick={() => {
                     cartActions.addToCart(product)
                     router.push('/cart')
                  }}
                  className="button button-blue md:w-28 w-24 md:h-10 h-8 rounded-md"
               >
                  Add to Cart
               </button>
            </div>
         </div>
      </div>
   )
}

// export layout
export default ProductPage;
