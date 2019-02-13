import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import KomponenSatu from './Component/NavSatu';
import KomponenDua from './Component/NavDua';

var AppNavigator = createDrawerNavigator(
  {
    HalSatu: KomponenSatu,
    HalDua: KomponenDua
  },
  {
    initialRouteName: 'HalSatu',
    // defaultNavigationOptions: {
      
    // },
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