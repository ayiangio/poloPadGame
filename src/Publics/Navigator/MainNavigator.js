import React, { Component } from 'react';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import Drawer from '../../Components/drawer'
import Main from '../../Components/Main'
import Home from '../../Screens/home/home'
import Login from '../../Screens/profile/login'
import Register from '../../Screens/profile/register'
import Board from '../../Screens/leaderBoard/leaderBoard'
const AppNavigator = createStackNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    Play: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    board: {
        screen: Board,
        navigationOptions: {
            headerTitle: 'Leaderboards'
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
