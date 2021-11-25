import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import tailwind from 'tailwind-rn';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types/types';

// type props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>

export default function FlexBoxScreen(props) {
  const { navigation } = props;
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
