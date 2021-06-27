// imported modules
import gql from 'graphql-tag';

// create query
const GET_PRODUCT = gql`
   query getProduct(
      $productId: ID!
   ) {
      getProduct(
         productId: $productId
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
export default GET_PRODUCT;