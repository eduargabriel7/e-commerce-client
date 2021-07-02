// imported modules
import { gql } from '@apollo/client';

// create query
const SEARCH_PRODUCTS = gql`
   query searchProducts(
      $searchInput: String!
   ) {
      searchProducts(
      searchInput: $searchInput
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
export default SEARCH_PRODUCTS;