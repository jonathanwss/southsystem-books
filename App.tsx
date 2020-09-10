/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from './src/Store/Provider';

const App = () => {
  return (
    <Provider>
      <PaperProvider> 
      </PaperProvider>
    </Provider>
  );
};

export default App;
