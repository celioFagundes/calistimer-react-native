import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/Home';
import EMOMScreen from './src/screens/EMOM';
import AMRAPScreen from './src/screens/AMRAP';
import IsometriaScreen from './src/screens/Isometria';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Emom" component={EMOMScreen} />
      <Stack.Screen name="Amrap" component={AMRAPScreen} />
      <Stack.Screen name="Isometria" component={IsometriaScreen} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Ubuntu-Italic',
    fontSize: 70,
    color: '#000',
  },
  text2: {
    fontSize: 70,
    color: '#000',
  },
});

export default App;
