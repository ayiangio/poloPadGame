import React, { Component, Fragment } from 'react'
import {View, ScrollView, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native'

class DrawerDashboard extends Component{
    render(){
        return(
            <Fragment >
                <View >
                    <Text>Login</Text> 
                    <Text>Register</Text>
                </View>
            </Fragment>
        )
    }
}
export default DrawerDashboard