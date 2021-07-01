// imported modules
import TechnologyLayout from './TechnologyLayout';
import ProductsList from '../shared-components/ProductsList';

// create component
const TechnologyPage = ({ products }) => {

   // render
   return (
      <TechnologyLayout>

         {/* products */}
         <ProductsList products={products} />

      </TechnologyLayout>
   )
}

// export component
export default TechnologyPage;
