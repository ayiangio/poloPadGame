import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

class DrawerDashboard extends Component {
    render() {
        return (
            <Fragment >
                <View style={style.container}>
                    <View style={style.header}>
                        <Text style={style.head}>Welcome To Polopad</Text>
                    </View>
                    <Image style={style.img}
                        source={require('../Assets/img/cicak.png')} />
                    <View style={style.login} >
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Login')} >
                            <Text style={style.text}>Login</Text></TouchableOpacity>
                    </View>
                    <View style={style.register}>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Register')}><Text style={style.text}>Register</Text></TouchableOpacity>
                    </View>
                </View>
            </Fragment>
        )
    }
}
export default DrawerDashboard

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 100
    },
    header: {
        top: 100,
        position: 'absolute',
    },
    img: {
        width: 60,
        height: 170,
        position: 'absolute',
    },
    head: {
        fontSize: 25,
        fontFamily: 'Times New Roman',
        textAlign: 'center',
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
        top: 5
    },
    login: {
        width: '55%',
        height: '7%',
        marginHorizontal: '20%',
        marginBottom: '5%',
        borderRadius: 20,
        backgroundColor: '#bdbdbd',
        marginTop: 320,
    },
    register: {
        width: '55%',
        height: '7%',
        marginHorizontal: '20%',
        marginBottom: '5%',
        borderRadius: 20,
        backgroundColor: '#bdbdbd',
    }
});