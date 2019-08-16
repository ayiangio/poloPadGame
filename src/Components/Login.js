import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../Publics/Redux/action/user'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            email: '',
            password: ''
        };
    }

    render() {
        const log = async () => {
            await this.state.user.push({
                email: this.state.email.toLocaleLowerCase(),
                password: this.state.password.toLocaleLowerCase(),
            });
            await this.props.dispatch(login(this.state.user[0]))
            .then((res)=>{
                const name = res.action.payload.data.result.fullName
                this.props.navigation.navigate('home',{
                    onGoBack: () => this.refresh(),
                  });
            })
            
    };
    return(
            <View style = { styles.container } >
            <Text style={styles.title}>Login </Text>
            <TextInput style={styles.inputBox}
                placeholder="Email"
                placeholderTextColor="black"
                keyboardType="email-address"
                onSubmitEditing={() => this.password.focus()}
                onChangeText={(email) => this.setState({ email })}
            />
            <TextInput style={styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="black"
                ref={(input) => this.password = input}
                onChangeText={(password) => this.setState({ password })}
            />
            <TouchableOpacity style={styles.button} onPress={log}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user.login
    };
};
export default connect(mapStateToProps)(withNavigation(Login))
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