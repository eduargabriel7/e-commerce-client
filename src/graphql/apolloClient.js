// imported modules
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// http link
const httpLink = createHttpLink({
   uri: 'http://localhost:4000/graphql'
})

// client
const apolloClient = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache()
})

// export module
export default apolloClient;