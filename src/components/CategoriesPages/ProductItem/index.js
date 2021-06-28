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
         className="sm:h-44 h-32 sm:p-4 p-2 flex rounded-md bg-paper"
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
         <div className="w-4/6 flex flex-col justify-around p-4">
            {/* title */}
            <p
               onClick={() => router.push(`/product/${product.id}`)}
               className="w-full md:text-xl text-sm cursor-pointer"
            >
               {product.title}
            </p>
            {/* price */}
            <p
               className="w-full font-medium font-roboto md:text-xl text-sm text-icon tracking-wide"
            >
               $ {product.price}
            </p>
         </div>

      </div>
   )
}

// export component
export default ProductItem;
