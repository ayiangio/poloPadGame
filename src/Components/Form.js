import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { addUser } from '../Publics/Redux/action/user'
import { withNavigation } from 'react-navigation';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }
    render() {
        const add = () => {
            this.state.user.push({
                email: this.state.email.toLocaleLowerCase(),
                password: this.state.password.toLocaleLowerCase(),
                fullName : this.state.fullName
            });
            adduser()
            console.log(this.state.user);
        };
        let adduser = async () => {
            await this.props.dispatch(addUser(this.state.user[0]))
                .then(() => {
                    this.props.navigation.navigate("Login");
                    console.log('berhasil')
                })

        };
        return (
            
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up </Text>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Full Name"
                    placeholderTextColor="black"
                    selectionColor="black"
                    keyboardType="text"
                    onSubmitEditing={() => this.password.focus()}
                    onChangeText={(fullName) => this.setState({ fullName })}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="black"
                    selectionColor="black"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="black"
                    ref={(input) => this.password = input}
                    onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity style={styles.button} onPress={add}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(withNavigation(Form))
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
        backgroundColor: "white",
        borderColor: 'black'
    },
    button: {
        width: 300,
        backgroundColor: 'black',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '500',
        color: 'black',
        paddingBottom: 10
    }

});