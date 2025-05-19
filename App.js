import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Navigation from './navigations/Navigation';

function App() {
  return (
    <SafeAreaProvider>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <Navigation />
        <Toast />
    </SafeAreaProvider>
  );
}

export default App;



