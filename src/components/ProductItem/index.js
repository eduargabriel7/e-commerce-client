// imported modules
import Image from 'next/image'

// create component
const ProductItem = ({ product }) => {

   // render
   return (
      <div
         className="shadow m-2 md:h-80 h-64 bg-transparent rounded-md p-4
         flex flex-col space-y-2"
      >
         {/* image */}
         <div className="relative min-h-1/2">
            <Image
               src={product.image} alt="product-image"
               layout="fill" objectFit="contain"
            />
         </div>

         {/* divider */}
         <div className="border-b border-gray-500 border-opacity-20 w-full"></div>

         {/* info */}
         <p className="md:text-lg font-sans font-medium text-icon">$ {product.price}</p>
         <div className="overflow-auto overscroll-contain flex-grow">{product.title}</div>

         {/* tools */}
         <p className="button text-blue-600 hover:underline">Show more</p>
      </div>
   )
}

// export component
export default ProductItem
