import React from 'react';
// import { Text, View } from 'react-native';
// import tailwind from 'tailwind-rn';
import RootNavigator from './navigations/RootNavigator';

export default function App() {
  return (
    <RootNavigator />
    // <View style={tailwind('flex-1 bg-gray-300 justify-center items-center')}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    // </View>
  );
}
