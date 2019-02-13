import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import KomponenSatu from './Component/NavSatu';
import KomponenDua from './Component/NavDua';
import Myicons from 'react-native-vector-icons/Ionicons';

var AppNavigator = createBottomTabNavigator(
  {
    HalSatu: KomponenSatu,
    HalDua: KomponenDua
  },
  {
    initialRouteName: 'HalSatu',
    // defaultNavigationOptions: {
    //   tabBarIcon: 
    //   <Myicons name='logo-instagram' size={20} color='red'/>
    // },
    
    // bottom tab icons
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Myicons;
        let iconName;
        if (routeName === 'HalSatu') {
          iconName = `logo-facebook`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'HalDua') {
          iconName = `logo-instagram`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),

    // # drawernav
    // drawerWidth: 140,
    drawerPosition: 'left',
    drawerBackgroundColor: 'white',
    drawerType: 'slide'

    // # stacknav
    // headerMode: 'float',
    // headerTransitionPreset: 'fade-in-place',
  }
)

export default createAppContainer(AppNavigator);