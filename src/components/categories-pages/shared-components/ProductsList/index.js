// imported modules
import ProductItem from '../ProductItem';

// create component
const ProductsList = ({ products }) => {

   // render
   return (
      <div className="w-full flex flex-col md:space-y-4 space-y-2">
         {
            products.map(product => (
               <ProductItem key={product.id} product={product} />
            ))
         }
      </div>
   )
}

// export component
export default ProductsList;
