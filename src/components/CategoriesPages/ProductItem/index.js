// imported modules
import { useRouter } from 'next/router';
import Image from 'next/image';

// create component
const ProductItem = ({ product }) => {

   // next hooks
   const router = useRouter();

   // render
   return (
      <div
         className="md:h-40 h-32 sm:p-2 p-2 relative flex rounded-md bg-paper shadow"
      >

         {/* image */}
         <div
            onClick={() => router.push(`/product/${product.id}`)}
            className="w-2/6 h-full relative cursor-pointer"
         >
            <Image
               src={product.image} alt="product-image"
               layout="fill" objectFit="contain"
            />
         </div>

         {/* info */}
         <div className="flex flex-col justify-around p-4">
            {/* title */}
            <p
               onClick={() => router.push(`/product/${product.id}`)}
               className="md:text-xl text-sm cursor-pointer truncate"
            >
               {product.title}
            </p>
            {/* price */}
            <p
               className="font-roboto md:text-xl text-sm text-icon tracking-wide"
            >
               $ {product.price}
            </p>
         </div>

         {/* tools */}
         <p
            onClick={() => router.push(`/product/${product.id}`)}
            className="absolute md:bottom-4 bottom-2 md:right-4 right-2
            md:text-sm text-xxs whitespace-nowrap button text-blue-600 hover:underline"
         >
            Show more
         </p>

      </div>
   )
}

// export component
export default ProductItem;
