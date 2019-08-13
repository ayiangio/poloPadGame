import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Form from '../../Components/Form';
export default class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Form type="Signup" />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} ><Text style={styles.signupButton}> Login</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#d3d3d3',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
      },
      signupTextCont : {
          flexGrow: 1,
        alignItems:'baseline',
        justifyContent :'center',
        paddingVertical:0,
        flexDirection:'row'
      },
      signupText: {
          color:'black',
          fontSize:16
      },
      signupButton: {
          color:'black',
          fontSize:16,
          fontWeight:'500'
      }
});