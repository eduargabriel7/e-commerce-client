// imported modules
import Image from 'next/image';
import { useRouter } from 'next/router'

// create component
const ProductItem = ({ product }) => {

   // hooks
   const router = useRouter();

   // render
   return (
      <div
         className="md:h-80 h-60 md:p-4 p-2 md:m-4 m-2 
         flex flex-col space-y-2 bg-paper rounded-md"
      >
         {/* image */}
         <div className="relative min-h-1/2">
            <Image
               src={product.image} alt="product-image"
               layout="fill" objectFit="contain"
               priority
            />
         </div>

         {/* divider */}
         <div className="border-b border-gray-500 border-opacity-20 w-full"></div>

         {/* info */}
         <p className="md:text-lg font-roboto font-medium text-icon tracking-wide">$ {product.price}</p>
         <div className="overflow-auto overscroll-contain flex-grow">{product.title}</div>

         {/* tools */}
         <p
            onClick={() => router.push(`/product/${product.id}`)}
            className="button text-blue-600 hover:underline w-20"
         >
            Show more
         </p>
      </div>
   )
}

// export component
export default ProductItem
