import React from 'react';
import { createStackNavigator, createAppContainer,Bu } from 'react-navigation'

import Home from '../../Screens/home/home'
const AppNavigator = createStackNavigator({
    home: {
        screen: Home, navigationOptions: {
            header: null
        }
    },
}, {
        initialRouteName: 'home',
    })

export default createAppContainer(AppNavigator)
