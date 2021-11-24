import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <View style={tailwind('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
