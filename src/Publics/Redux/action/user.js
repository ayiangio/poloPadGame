import axios from 'axios';
import { AsyncStorage } from 'react-native'
const url = 'https://apipolopad.herokuapp.com'

export const addUser = (data) => {
  console.log(data)
  return {
    type: 'REGISTER',
    payload: axios.post(`${url}/user/register`, data,
      {
        headers: {
          "authorization": "x-control-user",
        }
      })
  };
};
export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios.post(`${url}/user/login`, data,
      {
        headers: {
          "authorization": "x-control-user",
        }
      })
  };
};

export const logout = (data, jwt) => {
  return {
    payload: axios.post(`${url}/user/logout`, { idUser: data }, {
      headers: {
        "authorization": "x-control-user",
        "x-access-token": `bearer: ${jwt}`,
        "x-control-user": data
      }
    })
  };
};