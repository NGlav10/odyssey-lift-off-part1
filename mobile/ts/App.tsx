import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Header, Tracks } from './components';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
      <Tracks />
    </SafeAreaView>
  );
}

export default App;
