// imported modules
import Layout from 'components/Layout';
import 'styles/globals.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// apollo client
import { ApolloProvider } from '@apollo/client/react';
import apolloClient from 'graphql/apolloClient';

// redux
import { Provider as ReduxProvider } from 'react-redux';
import store from 'redux/store';

// create app 
function MyApp({ Component, pageProps }) {
   return (
      <ApolloProvider client={apolloClient}>
         <ReduxProvider store={store}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </ReduxProvider>
      </ApolloProvider>
   )
}

// export app
export default MyApp;