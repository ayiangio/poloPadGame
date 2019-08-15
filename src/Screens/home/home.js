import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image, TouchableHighlight,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getScoreId } from '../../Publics/Redux/action/board'
import { getPattern } from '../../Publics/Redux/action/board';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            userData: [],
            pattern:[],
        };

    }
    componentDidMount = async () => {
        await AsyncStorage.getItem('idUser', (error, result) => {
            if (result) {
                this.setState({
                    id: result,
                });
            }
        });
        console.log(this.state.userData)
        await this.props.dispatch(getScoreId(this.state.id));
        this.setState({
            userData: this.props.userId[0]
        });
        await this.props.dispatch(getPattern());
        this.setState({
            pattern: this.props.pattern.split('')
        })
    };
    render() {
        return (
            <View style={style.body} >
                <View style={style.navbar}>
                    <TouchableOpacity style={style.profilnavbar} onPress={() => {
                        this.props.navigation.openDrawer();
                    }}>
                        <Image
                            style={{ width: 32, height: 32, borderRadius: 100, overflow: "hidden" }}
                            source={require('../../Assets/img/user.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.scornavbar}
                        onPress={() => this.props.navigation.navigate('board', {
                            idUser: this.state.id,
                        })}
                    >
                        <Image
                            style={{ width: 32, height: 32 }}
                            source={require('../../Assets/img/crown.jpg')}
                        />
                    </TouchableOpacity>
                </View>
                <Image style={{ width: 350, height: 350, position: 'absolute',left : '9%',top: 83,borderRadius:20 }} source={require('../../Assets/img/ntaps.jpg')} />                    
                
                <View style={{top :'55%'}}>
                    <Text style={{fontSize:50,left:118,fontFamily:'Helvetica',fontWeight:'bold'}}>Hai Guys</Text>                    
                <View style={{ bottom: 30, left: 110, position: 'absolute' }}>
                    <TouchableHighlight style={[style.buttonContainer, style.loginButton]} onPress={() => this.props.navigation.navigate('Play', {
                        data: this.state.userData,
                        button : this.state.pattern[0]
                    })}>
                        <Text style={style.loginText}>Play</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ top: '70%', left: 110, position: 'absolute' }}>
                    <TouchableHighlight style={[style.buttonContainer, style.loginButton]} onPress={() => this.props.navigation.navigate('Train')}>
                        <Text style={style.loginText}>Training</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.board.listId,
        pattern: state.board.pola
    };
};
export default connect(mapStateToProps)(withNavigation(Dashboard));
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
        height: 65,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        borderRadius: 30,
        top: 120
    },
    loginButton: {
        backgroundColor: "black",
    },
    loginText: {
        color: 'white',
        fontSize: 40
    },
})