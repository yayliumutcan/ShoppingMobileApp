import * as React from 'react';
import { View, Text, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EnterScreen from './Pages/LoginScreen/EnterScreen';
import CreateScreen from './Pages/CreateScreen/CreateScreen';
import BasketScreen from './Pages/BasketScreen/BasketScreen';
import Events from './Pages/ProductScreen/Events';
import Detail from './Pages/ProductDetailScreen/Detail';
import WelcomeScreen from './Pages/WelcomeScreen/WelcomeScreen';
import FlashMessage from "react-native-flash-message";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ header: () => null }} />
      <Stack.Screen name="EnterScreen" component={EnterScreen} options={{ header: () => null }} />
      <Stack.Screen name="CreateScreen" component={CreateScreen} options={{ header: () => null }} />
      <Stack.Screen name="Events" component={Events} options={{ header: () => null }} />
      <Stack.Screen name="Detail" component={Detail} options={{ header: () => null }} />
      <Stack.Screen name="BasketScreen" component={BasketScreen} options={{ header: () => null }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      {ProductsStack()}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;