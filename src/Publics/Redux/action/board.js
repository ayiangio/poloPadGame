import axios from 'axios';
import { AsyncStorage } from 'react-native'
const url = 'http://192.168.6.141:5151'

export const addScore = (idUser,jwt,data) => {
  console.log(data)
  return {
    type: 'ADD_SCORE',
    payload: axios.post(`${url}/score`, data, 
    {
      headers: {
        "authorization": "x-control-user",
        "x-access-token": `bearer: ${jwt}`,
        "x-control-user": idUser
      }  
    })
  };
};
export const getScore = () => {
    return {
      type: 'GET_SCORE',
      payload: axios.get(`${url}/score`, 
      {
        headers: {
          "authorization": "x-control-user",
        }
      })
    };
  };
  export const getScoreId = (idUser) => {
    return {
      type: 'GET_SCORE_ID',
      payload: axios.get(`${url}/score/${Number(idUser)}`, 
      {
        headers: {
          "authorization": "x-control-user",
        }
      })
    };
  };