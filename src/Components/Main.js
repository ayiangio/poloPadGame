import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Text, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addScore } from '../../src/Publics/Redux/action/board'
import Sound from "react-native-sound";

class Drum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            combo: 5,
            score: 0,
            pattern: [1,2,3,2,2,3,2,3,4, 4, 4, 4, 2],
            isNow: 0,
            button: 1
        };
    }
    onBassPress1 = async () => {
        if(this.state.combo === 0){
            alert('Congratulation')
        }
        console.log("Tombol " + 1)
        const requireAudio = require('../Assets/snare.wav');
        const requireNext = require('../Assets/next.wav');
        const next = new Sound (requireNext)
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release(), s.setVolume(1.0)); });
        if (this.state.pattern[this.state.isNow] === 1) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo - 1,
                    isNow: 0
                })
                next.play(() => next.release())
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        
        else {
            alert('Sorry You Lose')
            await this.setState({
                score: 0,
                hasil: 0,
                isNow: 0,
                combo: 5
            })
        }
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
        console.log("Score " + this.state.score)
        console.log("Cpmbo " + this.state.combo)
    }
    onBassPress2 = async () => {
        if(this.state.combo === 0){
            alert('Congratulation')
        }
        console.log("Tombol " + 4)
        const requireAudio = require('../Assets/snare.wav');
        const requireNext = require('../Assets/next.wav');
        const next = new Sound (requireNext)
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release(), s.setVolume(1.0)); });
        if (this.state.pattern[this.state.isNow] === 4) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo - 1,
                    isNow: 0
                })
                next.play(() => next.release())
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            alert('Sorry You Lose')
            await this.setState({
                score: 0,
                hasil: 0,
                isNow: 0,
                combo: 5
            })
        }
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
        console.log("Score " + this.state.score)
        console.log("Combo " + this.state.combo)
    }
    onCymbalPress2 = async () => {
        if(this.state.combo === 0){
            alert('Congratulation')
        }
        console.log("Tombol " + 2)
        const requireAudio = require('../Assets/cymbal.wav');
        const requireNext = require('../Assets/next.wav');
        const next = new Sound (requireNext)
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release(), s.setVolume(1.0)); });
        if (this.state.pattern[this.state.isNow] === 2) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo - 1,
                    isNow: 0
                })
                next.play(() => next.release())
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            alert('Sorry You Lose')
            await this.setState({
                score: 0,
                hasil: 0,
                isNow: 0,
                combo: 5
            })
        }
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
        console.log("Score " + this.state.score)
        console.log("Cpmbo " + this.state.combo)
    }
    onCymbalPress1 = async () => {
        if(this.state.combo === 0){
            alert('Congratulation')
        }
        console.log("Tombol " + 3)
        const requireAudio = require('../Assets/cymbal.wav');
        const requireNext = require('../Assets/next.wav');
        const next = new Sound (requireNext)
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release(), s.setVolume(1.0)); });
        if (this.state.pattern[this.state.isNow] === 3) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo - 1,
                    isNow: 0
                })
                next.play()
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            Alert.alert(
                'Lose !!!',
                `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                [
                  { text: 'Save Score', 
                    onPress: () => console.log('OK Pressed')
                  },
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    
                  },
                ],
              );
            await this.setState({
                score: 0,
                hasil: 0,
                isNow: 0,
                combo: 5
            })
        }
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
        console.log("Score " + this.state.score)
        console.log("Cpmbo " + this.state.combo)
    }
    render() {
        return (
            <>
                <View style={{ marginTop: -320 }}>
                    <Text style={{ textAlign: 'center', fontSize: 50 }} >SCORE</Text>
                    <Text style={{ textAlign: 'center', fontSize: 50 }}>{this.state.score}</Text>
                </View>
                <View style={{ marginTop: 50 }}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Combo Ke - {this.state.combo}</Text>
                </View>
                <View style={styles.container}>
                    <Image style={{ width: 370, height: 230, position: 'absolute', top: 270 }} source={require('../Assets/img/bg.png')} />
                    <View style={{ top: '5%' }}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 100 }}>
                            <TouchableHighlight
                                activeOpacity={0.9}
                                style={styles.smallDrum}
                            >
                                {this.state.button == 2 ? <TouchableOpacity style={styles.smallDrumOutter}
                                    onPress={this.onCymbalPress2.bind(this)}
                                    activeOpacity={0.1}>
                                    <Text  > </Text>
                                </TouchableOpacity> : <TouchableOpacity style={styles.smallDrumOutter}
                                    onPress={this.onCymbalPress2.bind(this)}
                                    activeOpacity={0.1}>
                                        <Text style={styles.smallDrumInner} > </Text>
                                    </TouchableOpacity>}

                            </TouchableHighlight>
                            <TouchableHighlight
                                activeOpacity={0.9}
                                style={styles.smallDrum}>
                                {this.state.button == 3 ? <TouchableOpacity style={styles.smallDrumOutter}
                                    onPress={this.onCymbalPress1.bind(this)}
                                    activeOpacity={0.1}>
                                    <Text  > </Text>
                                </TouchableOpacity> : <TouchableOpacity style={styles.smallDrumOutter}
                                    onPress={this.onCymbalPress1.bind(this)}
                                    activeOpacity={0.1}>
                                        <Text style={styles.smallDrumInner} > </Text>
                                    </TouchableOpacity>}
                            </TouchableHighlight>
                        </View>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-evenly', bottom: '15%' }}>
                            <TouchableHighlight
                                style={styles.bigDrum}
                                
                            >
                                {this.state.button == 1 ?
                                    <TouchableOpacity style={styles.bigDrumOutter}
                                        onPress={this.onBassPress1.bind(this)}
                                        activeOpacity={0.1}>
                                        <Text ></Text>
                                    </TouchableOpacity> : <TouchableOpacity style={styles.bigDrumOutter}
                                        onPress={this.onBassPress1.bind(this)}
                                        activeOpacity={0.1}>
                                        <Text style={styles.bigDrumInner}></Text>
                                    </TouchableOpacity>}
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.bigDrum}

                            >
                                {this.state.button == 4 ?
                                    <TouchableOpacity style={styles.bigDrumOutter}
                                        onPress={this.onBassPress2.bind(this)}
                                        activeOpacity={0.1}>
                                        <Text ></Text>
                                    </TouchableOpacity> : <TouchableOpacity style={styles.bigDrumOutter}
                                        onPress={this.onBassPress2.bind(this)}
                                        activeOpacity={0.1}>
                                        <Text style={styles.bigDrumInner}></Text>
                                    </TouchableOpacity>}
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
        justifyContent: 'center',
        top: 40
    }
})