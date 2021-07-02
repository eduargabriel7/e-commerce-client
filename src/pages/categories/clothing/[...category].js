// imported modules
import ClothingPage from 'components/categories-pages/ClothingPage';

// create component
const ClothingCategories = ({ categories }) => {

   // render
   return (
      <ClothingPage categories={categories} />
   )
}

// server side rendering
export async function getServerSideProps(context) {
   // dynamic route parameter
   const categoriesArray = context.params.category;
   // return props in server side
   return {
      props: {
         categories: categoriesArray.join(' ')
      },
   }
}

// export component
export default ClothingCategories;