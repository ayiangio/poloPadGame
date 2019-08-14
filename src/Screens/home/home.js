import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,TouchableHighlight,
    AsyncStorage
} from 'react-native';
import { withNavigation } from 'react-navigation';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
        };
        AsyncStorage.getItem('idUser', (error, result) => {
            if (result) {
                this.setState({
                    id: result,
                });
            }
        });
    }
    render() {
        return (
            <View style={style.body} >
                <View style={style.navbar}>
                    <TouchableOpacity style={style.profilnavbar} onPress={() => {
                        this.props.navigation.openDrawer();
                    }}>
                        <Image
                            style={{ width: 32, height: 32, borderRadius: 100, overflow: "hidden" }}
                            source={require('../../Assets/img/user.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.scornavbar} 
                        onPress={() => this.props.navigation.navigate('board', {
                            idUser: this.state.id
                          })}
                    >
                        <Image
                            style={{ width: 32, height: 32 }}
                            source={require('../../Assets/img/crown.png')}
                        />
                    </TouchableOpacity>               
                </View>     
                    <View style={{top:'30%', left:110,position:'absolute'}}>
                        <TouchableHighlight style={[style.buttonContainer, style.loginButton]}  onPress={() => this.props.navigation.navigate('Play')}>
                            <Text style={style.loginText}>Play</Text>
                        </TouchableHighlight>
                    </View>                
            </View>
        )
    }
}

export default (withNavigation(Dashboard))
const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white"
    },
    navbar: {
        flex: 1,
        backgroundColor: "#939393",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 4,
        elevation: 3,
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowColor: "#111",
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        top: 0,
        left: "0%",
        width: '100%',
        height: 56,
        position: "absolute"
    },
    profilnavbar: {
        top: 5,
        left: 5,
        position: "absolute",
        padding: 11
    },
    scornavbar: {
        top: 5,
        position: "absolute",
        alignItems: "center",
        right: 5,
        padding: 11
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        borderRadius: 30,
        top: 90
    },
    loginButton: {
        backgroundColor: "black",
    },
    loginText: {
        color: 'white',
    },
})