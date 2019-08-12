import React, { Component } from 'react';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import Drawer from '../../Components/drawer'
import Home from '../../Screens/home/home'
const AppNavigator = createStackNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
}, {
        initialRouteName: 'home',
    })
const DrawerKuyMusik = createDrawerNavigator({
    dashBoard: { screen: AppNavigator }
}, {
        contentComponent: Drawer
    },
    {
        hideStatusBar: true,
        overlayColor: 'black',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: 'black',
        },
    })

// const DrawerNavigator = createDrawerNavigator(
//     {
//         home: Home,
//         Settings: Drawer,
//     },
    
// );

// export default createAppContainer(DrawerNavigator);

export default createAppContainer(DrawerKuyMusik)
