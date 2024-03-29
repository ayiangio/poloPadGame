
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Leaderboard from 'react-native-leaderboard'
import { connect } from 'react-redux';
import { getScore } from '../../Publics/Redux/action/board'
import { getScoreId } from '../../Publics/Redux/action/board'

class boards extends Component {
  constructor(props) {
    super(props)
      this.state = {  
        data: [],
        userData:{},
        user:{}
    }; 
}
componentDidMount = async () => {
  await this.props.dispatch(getScore());
  this.setState({
    data: this.props.score,
    user : this.props.user
  });
  await this.props.dispatch(getScoreId(this.props.navigation.getParam('idUser')));
  this.setState({
    userData: this.props.userId[0]
  });
  
};
  render() {
    console.log(this.state.user.fullName)
    return (
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.text1}>
            <Text style={{
              fontSize: 20,
              color: 'black',
            }}>Name </Text>
            {this.state.userData?
            <Text style={{
              fontSize: 20,
              color: 'black',
            }}>{this.state.userData.fullName }</Text>:
            <Text style={{
              fontSize: 20,
              color: 'black',
            }}>{this.state.user.fullName }</Text>}
          </View>
          
          <View>
            {/* {this.state.userData? <Text style={{position:'absolute',fontSize:20,textAlign:'center',marginLeft:'43%',top:8}}>{this.state.userData.fullName}</Text> : <Text style={{position:'absolute',fontSize:20,marginLeft:'43%',top:8}}>{this.state.user.fullName}</Text>} */}
            <Image style={style.img}
              source={require('../../Assets/img/user.jpg')} />              
          </View>
          <View style={style.text2}>
            <Text style={{
              fontSize: 20,
              color: 'black'
            }}>Score</Text>
            {this.state.userData?
            <Text style={{
              fontSize: 20,
              color: 'black',left:10
            }}>{this.state.userData.score }</Text>:
            <Text style={{
              fontSize: 20,
              color: 'black',
            }}>{this.state.user.score }</Text>}
          </View>
        </View>
        <View>
        <Leaderboard 
        data={this.state.data} 
        sortBy='score' 
        labelBy='fullName'
        />
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    score: state.board.scoreList,
    userId : state.board.listId,
    user:state.board.scoreList[0]
  };
};
export default connect(mapStateToProps)(boards);
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: "100%",
    height: 132,
    backgroundColor: '#bdbdbd',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: "hidden",
    marginVertical: '12%',
    marginHorizontal: '40%'
  },
  text1: {
    position: 'absolute',
    marginVertical: '12%',
    marginHorizontal: '12%'
  },
  text2: {
    position: 'absolute',
    marginVertical: '12%',
    marginLeft: '73%',
  }
});