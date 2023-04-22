import React from 'react';

import { Header, Tracks } from './components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackDetail from './components/TrackDetail';
import { RootStackParamList } from './typeDef';

const Stack = createNativeStackNavigator<RootStackParamList>();

const header = () => <Header />;

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
          screenOptions={{
            header,
            fullScreenGestureEnabled: true,
          }}>
          <Stack.Screen name="Tracks" component={Tracks} />
          <Stack.Screen name="TrackDetail" component={TrackDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
