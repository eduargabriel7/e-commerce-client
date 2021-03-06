// imported modules
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// http link
const httpLink = createHttpLink({
   uri: 'https://eduargabriel7-ecommerce-server.vercel.app/graphql'
})

// http://localhost:4000/graphql
// https://eduargabriel7-ecommerce-server.vercel.app/graphql

// client
const apolloClient = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache()
})

// export module
export default apolloClient;