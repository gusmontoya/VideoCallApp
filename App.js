/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';

import ContactsScreen from './src/screens/ContactsScreen';
import CallingScreen from './src/screens/CallingScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
        <CallingScreen/>
      </SafeAreaView>
    );
};

export default App;
