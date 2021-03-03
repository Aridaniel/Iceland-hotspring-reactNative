import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
/* import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Homescreen from './components/Homescreen'
import Icon from 'react-native-vector-icons/FontAwesome'; */

import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './components/Navigator';



export default function App() {
 return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
