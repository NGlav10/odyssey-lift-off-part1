import React from 'react';

import { Tracks } from './components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tracks"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tracks" component={Tracks} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
