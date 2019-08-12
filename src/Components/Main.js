import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Sound from "react-native-sound";

class Drum extends Component {
    onBassPress() {
        const requireAudio = require('../Assets/snare.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }

    onCymbalPress() {
        const requireAudio = require('../Assets/cymbal.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ top: '5%' }}>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 100 }}>
                        <TouchableHighlight
                            activeOpacity={0.9}
                            style={styles.smallDrum}>
                            <TouchableOpacity style={styles.smallDrumOutter}
                                onPress={this.onCymbalPress.bind(this)}
                                activeOpacity={0.1}>
                                <Text style={styles.smallDrumInner} > </Text>
                            </TouchableOpacity>
                        </TouchableHighlight>
                        <TouchableHighlight
                            activeOpacity={0.9}
                            style={styles.smallDrum}>
                            <TouchableOpacity style={styles.smallDrumOutter}
                                onPress={this.onCymbalPress.bind(this)}
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
                                onPress={this.onBassPress.bind(this)}
                                activeOpacity={0.1}>
                                <Text style={styles.bigDrumInner}></Text>
                            </TouchableOpacity>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.bigDrum}

                        >
                            <TouchableOpacity style={styles.bigDrumOutter}
                                onPress={this.onBassPress.bind(this)}
                                activeOpacity={0.1}>
                                <Text style={styles.bigDrumInner}></Text>
                            </TouchableOpacity>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

export default Drum

// class BigDrum extends Component {
//     render() {
//         return (
//             <TouchableHighlight
//                 style={styles.bigDrum}

//             >
//                 <TouchableOpacity style={styles.bigDrumOutter}
//                     onPress={this.onButtonPress.bind(this)}
//                     activeOpacity={0.1}>
//                     <Text style={styles.bigDrumInner}></Text>
//                 </TouchableOpacity>
//             </TouchableHighlight>
//         )
//     }
// }

// class SmallDrum extends Component {
//     render() {
//         return (
//             <TouchableHighlight
//                 activeOpacity={0.9}
//                 style={styles.smallDrum}>
//                 <TouchableOpacity style={styles.smallDrumOutter}
//                     onPress={this.onButtonPress.bind(this)}
//                     activeOpacity={0.01}>
//                     <Text style={styles.smallDrumInner} > </Text>
//                 </TouchableOpacity>
//             </TouchableHighlight>
//         )
//     }
// }

const styles = StyleSheet.create({
    bigDrum: {
        width: '75%',
        height: 100,
        top: 100,
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})