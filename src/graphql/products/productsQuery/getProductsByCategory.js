// imported modules
import gql from 'graphql-tag';

// create query
const GET_PRODUCTS_BY_CATEGORY = gql`
   query getProductsByCategory(
      $category: String!
   ) {
      getProductsByCategory(
      category: $category
      ) {
         id
         title
         description
         category
         image
         price
         createdAt
         updatedAt
      }
   }
`

// export module
export default GET_PRODUCTS_BY_CATEGORY;