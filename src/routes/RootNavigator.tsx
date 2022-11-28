import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../view/layouts/Home/HomePage';

type MainStackParams = {
  Home: undefined,
}

const Stack = createNativeStackNavigator<MainStackParams>();

const RootNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
