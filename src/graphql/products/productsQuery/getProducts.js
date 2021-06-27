// imported modules
import gql from 'graphql-tag';

// create query
const GET_PRODUCTS = gql`
   query {
      getProducts {
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
export default GET_PRODUCTS;