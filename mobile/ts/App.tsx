import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Header, Tracks } from './components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App(): JSX.Element {
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <StatusBar />
        <Header />
        <Tracks />
      </SafeAreaView>
    </ApolloProvider>
  );
}

export default App;
