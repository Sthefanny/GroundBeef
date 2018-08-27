import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './src/screens/Main/Main';
import HeaderLogo from './src/components/Header/HeaderLogo';

export default createStackNavigator({
  'Main': {
    screen: MainScreen
  }
},
  {
    navigationOptions: {
      headerTitle: <HeaderLogo />,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#000',
        height: 70
      },
    }
  }
);