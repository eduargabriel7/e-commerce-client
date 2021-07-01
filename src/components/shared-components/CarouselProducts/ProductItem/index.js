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
         className="md:h-80 h-52 md:p-4 p-2 md:m-4 m-2 
         flex flex-col justify-between bg-paper rounded-md shadow"
      >
         {/* image */}
         <div className="relative h-3/5">
            <Image
               src={product.image} alt="product-image"
               layout="fill" objectFit="contain"
               priority
            />
         </div>

         {/* divider */}
         <div className="divider-gray w-full"></div>

         {/* info */}
         <p className="md:text-lg font-roboto text-icon tracking-wide">
            $ {product.price}
         </p>
         <div className="md:text-base overflow-auto overscroll-contain truncate">
            {product.title}
         </div>

         {/* tools */}
         <p
            onClick={() => router.push(`/product/${product.id}`)}
            className="md:text-sm text-xxs button text-blue-600 hover:underline w-20"
         >
            Show more
         </p>
      </div>
   )
}

// export component
export default ProductItem
