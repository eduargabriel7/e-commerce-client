// imported modules
import TechnologyPage from 'components/categories-pages/TechnologyPage';

// create component
const TechnologyCategories = ({ categories }) => {

   // render
   return (
      <TechnologyPage categories={categories} />
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
export default TechnologyCategories;
