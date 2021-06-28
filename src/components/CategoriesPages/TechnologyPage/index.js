// imported modules
import OptionsPanel from './OptionsPanel';
import ProductItem from '../ProductItem';
import OptionsBar from './OptionsBar';

// create component
const TechnologyPage = ({ products }) => {

   // render
   return (
      <div
         className="max-w-screen-xl mx-auto md:pt-28 pt-20 md:pb-72 pb-56 px-4
         flex md:space-x-6"
      >
         {/* panel */}
         <OptionsPanel />

         {/* main section */}
         <div className="w-full flex flex-col md:space-y-4 space-y-2">

            {/* bar */}
            <OptionsBar />

            {/* products */}
            {
               products.map(product => (
                  <ProductItem key={product.id} product={product} />
               ))
            }
         </div>
      </div>
   )
}

// export component
export default TechnologyPage;
