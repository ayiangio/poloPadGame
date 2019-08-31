import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Sound from "react-native-sound";

class Drum extends Component {
    
    onBassPress1 = async () => {
        const requireAudio = require('../Assets/snare.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release(), s.setVolume(1.0)); });
    }
    onBassPress2 = async () => {
        const requireAudio = require('../Assets/snare.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release(), s.setVolume(1.0)); });        
    }
    onCymbalPress2 = async () => {
        const requireAudio = require('../Assets/cymbal.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release(), s.setVolume(1.0)); });        
    }
    onCymbalPress1 = async () => {
        const requireAudio = require('../Assets/cymbal.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release(), s.setVolume(1.0)); });        
    }
    render() {
        return (
            <>
                <View style={{ marginTop:40}}>
                    <Text style={{ textAlign: 'center', fontSize: 50 }} >Training</Text>
                    <Text style={{ textAlign: 'center', fontSize: 50 }}>Mode</Text>
                </View>
                <View style={{ marginTop: 50 }}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Come ON !!!!!</Text>
                </View>
                <View style={styles.container}>
                    <Image style={{ width: 370, height: 230, position: 'absolute', top: 220 }} source={require('../Assets/img/bg.jpg')} />
                    <View style={{ top: '5%' }}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 100 }}>
                            <TouchableHighlight
                                activeOpacity={0.9}
                                style={styles.smallDrum}
                            >
                                <TouchableOpacity style={styles.smallDrumOutter}
                                    onPress={this.onCymbalPress2.bind(this)}
                                    activeOpacity={0.1}>
                                    <Text style={styles.smallDrumInner} > </Text>
                                </TouchableOpacity>
                                
                            </TouchableHighlight>
                            <TouchableHighlight
                                activeOpacity={0.9}
                                style={styles.smallDrum}>
                                    <TouchableOpacity style={styles.smallDrumOutter}
                                    onPress={this.onCymbalPress2.bind(this)}
                                    activeOpacity={0.1}>
                                    <Text style={styles.smallDrumInner} > </Text>
                                </TouchableOpacity>
                            </TouchableHighlight>
                        </View>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-evenly', bottom: '15%' }}>
                            <TouchableHighlight
                                style={styles.bigDrum}
                            >
                                <TouchableOpacity style={styles.bigDrumOutter}
                                    onPress={this.onBassPress1.bind(this)}
                                    activeOpacity={0.1}>
                                    <Text style={styles.bigDrumInner}></Text>
                                </TouchableOpacity>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.bigDrum}

                            >
                                 <TouchableOpacity style={styles.bigDrumOutter}
                                    onPress={this.onBassPress1.bind(this)}
                                    activeOpacity={0.1}>
                                    <Text style={styles.bigDrumInner}></Text>
                                </TouchableOpacity>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </>
        )
    }
}

export default Drum


const styles = StyleSheet.create({
    bigDrum: {
        width: '75%',
        height: 100,
        top: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigDrumOutter: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#EECECE',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    bigDrumInner: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: '#E3A6AE',
        position: 'absolute'
    },
    bigDrumInneract: {
        width: 90,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: '#E3A6AE',
        position: 'absolute'
    },
    smallDrum: {
        width: '25%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallDrumOutter: {
        width: 80,
        height: 80,
        borderRadius: 100 / 2,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    smallDrumInner: {
        width: 40,
        height: 40,
        borderRadius: 100 / 2,
        backgroundColor: '#B7C8CB',
        position: 'absolute'
    },smallDrumInneract: {
        width: 90,
        height: 40,
        borderRadius: 100 / 2,
        backgroundColor: '#B7C8CB',
        position: 'absolute'
    },
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
        top: 320,
        position:'absolute'
    }
})