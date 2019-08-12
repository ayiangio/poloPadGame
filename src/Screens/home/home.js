import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';

Clik = () => {
    alert('yey ye josd')
}

class Dashboard extends Component {
    render() {
        return (
            <View style={style.body} >
                <View style={style.navbar} onPress={() => {
                    this.props.navigation.dispatch(DrawerActions.closeDrawer());
                }}>
                    <TouchableOpacity style={style.profilnavbar} onPress={() => {
                        this.props.navigation.openDrawer();
                    }}>
                        <Image
                            style={{ width: 32, height: 32, borderRadius: 100, overflow: "hidden" }}
                            source={require('../../Assets/img/user.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.scornavbar}>
                        <Image
                            style={{ width: 32, height: 32 }}
                            source={require('../../Assets/img/crown.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={style.konten}>
                <Text style={style.text}>Combo Hit : 5</Text>
                <Text style={style.text2}>Kuy Musik</Text>
                <Text style={style.text3}>Jos Jos Aye Aye</Text>
                
                <TouchableOpacity>
                    <View style={style.ellipse} />
                    <View style={style.ellipse1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Clik}>
                    <View style={style.ellipse2} />
                    <View style={style.ellipse3} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={style.ellipse4} />
                    <View style={style.ellipse5} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Clik}>
                    <View style={style.ellipse6} />
                    <View style={style.ellipse7} />
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Dashboard
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
    text: {
        top: 161.54,
        left: 133.6,
        color: "#f79237",
        position: "absolute"
    },
    text2: {
        top: 176.51,
        left: "16.39%",
        color: "#f79237",
        position: "absolute",
        fontSize: 51,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    text3: {
        top: 234.92,
        left: 125.13,
        color: "#f79237",
        position: "absolute",
        fontSize: 14
    },
    ellipse: {
        top: 356.22,
        left: 34.79,
        width: 90.34,
        height: 90.45,
        position: "absolute",
        backgroundColor: "rgba(238,206,206,1)",
        borderRadius: 100,
    },
    ellipse1: {
        top: 376.49,
        left: 54.76,
        width: 50.4,
        height: 49.91,
        position: "absolute",
        backgroundColor: "rgba(227,166,174,1)",
        borderRadius: 100,
    },
    ellipse2: {
        top: 356.22,
        left: 234.38,
        width: 90.34,
        height: 90.45,
        position: "absolute",
        backgroundColor: "rgba(238,206,206,1)",
        borderRadius: 100,
    },
    ellipse3: {
        top: 376.49,
        left: 254.35,
        width: 50.4,
        height: 49.91,
        position: "absolute",
        backgroundColor: "rgba(227,166,174,1)",
        borderRadius: 100,
    },

    ellipse4: {
        top: 267.29,
        left: 196.71,
        width: 75.34,
        height: 75.45,
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: 100,
        elevation: 10
    },
    ellipse5: {
        top: 285.01,
        left: 214.18,
        width: 40.4,
        height: 40,
        position: "absolute",
        backgroundColor: "rgba(183,200,203,1)",
        borderRadius: 100,
    },
    ellipse6: {
        top: 267.29,
        left: 95.93,
        width: 75.34,
        height: 75.45,
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: 100,
        elevation: 10
    },
    ellipse7: {
        top: 285.01,
        left: 113.4,
        width: 40.4,
        height: 40,
        position: "absolute",
        backgroundColor: "rgba(183,200,203,1)",
        borderRadius: 100,
    },
    konten : {
        left:30,
        top : 60
    }
})