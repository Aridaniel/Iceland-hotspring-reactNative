import React from 'react';
import { Button, Settings, StyleSheet, Text, View } from 'react-native';
/* import Icon from 'react-native-vector-icons/FontAwesome'; */

import { MaterialCommunityIcons } from '@expo/vector-icons';



//Import libraries

 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Ionicons from 'react-native-vector-icons/Ionicons';


//Impprt Conponnets

import Homescreen from './Homescreen';
import Hotspring from './Hotspring';
import Profile from './Profile';
import TabBar from './TabBar'
 



const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
         <Tab.Screen name="Explore" component={Homescreen} initialParams={{icon:'find'}} />
         <Tab.Screen name="Hotsprings" component={Hotspring} initialParams={{icon:'hearto'}}/>
         <Tab.Screen name="Profile" component={Profile} initialParams={{icon:'user'}}/>
        </Tab.Navigator>
  
  );
}








/* screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
        iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
    } else if (route.name === 'Hotspring') {
        iconName = focused ? 'ios-list-box' : 'ios-list';
    }
    

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={34} color={color} />;
        },
    })}
    tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }}
    > */
