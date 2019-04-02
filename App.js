
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Splash from './src/screens/splash';
import Login from './src/screens/login';
import Logout from './src/screens/logout';
import Dashboard from './src/screens/dashboard';
import Forget from './src/screens/forget';
import Cards from './src/screens/cards'


const RootStack = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      title: '',
      header: null
    }
  },


  Login: {
    screen: Login,
    navigationOptions: {
      title: '',
      header: null
    }
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      title: '',
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: '',
      header: null
    }
  },
  Forget: {
    screen: Forget,
    navigationOptions: {
      title: 'Forgot Password',
      // header: null
    }
  },

  Cards: {
    screen: Cards,
    navigationOptions: {
      title: 'Cards',
      // header: null
    }
  },
  // Cards: {
  //   screen: Cards,
  //   navigationOptions: {
  //     title: 'Cards',
  //   }
  // }
},
);
export default createAppContainer(RootStack);



