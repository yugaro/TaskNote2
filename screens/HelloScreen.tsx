import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import tailwind from 'tailwind-rn';

export default function HelloScreen() {
  useEffect(() => {
    console.log('mounted HelloScreen');
    return () => {
      console.log('un-mounted HelloScreen');
    };
  }, []);
  return (
    <View style={tailwind('flex-1 bg-gray-300 justify-center items-center')}>
      <Text> HelloScreen </Text>
    </View>
  );
}
