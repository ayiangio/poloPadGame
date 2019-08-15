import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image,AsyncStorage } from 'react-native'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import {logout} from '../Publics/Redux/action/user'
class DrawerDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {            
            name: '',
            email:'',
            token:'',
            id:''
        };
    }
    componentDidMount  () {
         this.store()
    }    
    store = async ()=>  {
        this.setState({
            name : await AsyncStorage.getItem('fullName'),
            email : await AsyncStorage.getItem('email'),
            id : await AsyncStorage.getItem('idUser'),
            token : await AsyncStorage.getItem('jwtToken'),
        });
        // AsyncStorage.getItem('email', (error, result) => {
        //     if (result) {
        //         this.setState({
        //             email: result,
        //         });
        //     }
        // });
        // AsyncStorage.getItem('idUser', (error, result) => {
        //     if (result) {
        //         this.setState({
        //             id: result,
        //         });
        //     }
        // });
        // AsyncStorage.getItem('jwtToken', (error, result) => {
        //     if (result) {
        //         this.setState({
        //             token: result,
        //         });
        //     }
        // });
    }
    logout  () {
        console.log('masuk')
        this.props.dispatch(logout(Number(this.state.id),this.state.token))
        .then(() => {
          AsyncStorage.clear().then(()=>{
            this.props.navigation.push('home');
          })         
        })
    }
    render() {
        return (
            <Fragment >
            {this.state.name ? 
            <View style={style.container}>
                    <View style={style.header}>
                        <Text style={style.head}>Welcome {this.state.name}</Text>
                    </View>
                    <Image style={style.img}
                        source={require('../Assets/img/cicak.png')} />
                    <View style={style.login} >
                        <TouchableOpacity onPress={this.logout.bind(this)} >
                            <Text style={style.text}>Logout</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={style.register2}>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Register')}><Text style={style.text}></Text></TouchableOpacity>
                    </View>
                </View>:
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
                </View>}
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
      user: state.user.userList
    };
  };
export default connect(mapStateToProps)(withNavigation(DrawerDashboard))
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
    },register2: {
        width: '55%',
        height: '7%',
        marginHorizontal: '20%',
        marginBottom: '5%',
        borderRadius: 20,
        backgroundColor: 'white',
    }
});