import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import tailwind from 'tailwind-rn';

export default function FlexBoxScreen() {
  useEffect(() => {
    console.log('mounted FlexBox');
    return () => {
      console.log('un-mounted FlexBox');
    };
  }, []);
  return (
    <View style={tailwind('flex-1 bg-gray-300 justify-center items-center')}>
      <Text> Flex Box </Text>
    </View>
  );
}
