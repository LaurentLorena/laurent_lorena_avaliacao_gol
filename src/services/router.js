import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WeatherScreen, CitiesScreen} from '../screens';

const router = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="WeatherScreen">
      <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
      <Stack.Screen name="CitiesScreen" component={CitiesScreen} />
    </Stack.Navigator>
  );
};

export default router;
