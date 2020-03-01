import getConfig from '@/_config';
import ApolloClient from 'apollo-boost';

const apolloClient = () => {
  const client = new ApolloClient({
    uri: getConfig().apiUrl,
    request: (operation: any) => {
      operation.setContext({
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
    },
  });

  client.defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  }};

  return client;
};

export default apolloClient;
