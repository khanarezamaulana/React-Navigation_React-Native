import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import KomponenSatu from './Component/NavSatu';
import KomponenDua from './Component/NavDua';

var AppNavigator = createStackNavigator(
  {
    HalSatu: KomponenSatu,
    HalDua: KomponenDua
  },
  {
    initialRouteName: 'HalSatu',
    defaultNavigationOptions: {
      
    },
    headerMode: 'float',
    headerTransitionPreset: 'fade-in-place',
  }
)

export default createAppContainer(AppNavigator);