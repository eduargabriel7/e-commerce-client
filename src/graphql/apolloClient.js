// imported modules
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// http link
const httpLink = createHttpLink({
   uri: 'https://eduargabriel7-ecommerce-server.herokuapp.com/graphql'
})

// client
const apolloClient = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache()
})

// export module
export default apolloClient;