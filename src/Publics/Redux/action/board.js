import axios from 'axios';
import { AsyncStorage } from 'react-native'
const url = 'https://apipolopad.herokuapp.com'

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
export const updateScore = (idUser,jwt,data) => {
  console.log(data)
  return {
    type: 'UPDATE_SCORE',
    payload: axios.patch(`${url}/score`, data, 
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
  export const getPattern = () => {
    return {
      type: 'GET_PATTERN',
      payload: axios.get(`${url}/pattern`, 
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