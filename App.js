import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TryCodeScreen from './src/screens/TryCodeScreen'
import MainNavigator from './src/navigator/MainNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <TryCodeScreen/> */}
      <MainNavigator/>
    </SafeAreaProvider>
  )
}

export default App;