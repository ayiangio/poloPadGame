import axios from 'axios';
import { AsyncStorage } from 'react-native'
const url = 'http://192.168.6.141:5151'

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
  console.log(data)
  return {
    type: 'LOGIN',
    payload: axios.post(`${url}/user/login`, data, 
    {
      headers: {
        "authorization": "x-control-user",
      }
    } ).then(res => {
      const token = res.data.result.token
      const idUser = res.data.result.idUser.toString()
      const fullName = res.data.result.fullName
      const email = res.data.result.email
      const status = res.data.result.status
      console.log(fullName)
      // AsyncStorage.removeItem('idUser');
      // AsyncStorage.removeItem('jwtToken');
      // AsyncStorage.removeItem('fullName');
      // AsyncStorage.removeItem('email');
      // AsyncStorage.removeItem('status');
      AsyncStorage.setItem('idUser', idUser)
      AsyncStorage.setItem('jwtToken', token)
      AsyncStorage.setItem('fullName', fullName)
      AsyncStorage.setItem('email', email)
      AsyncStorage.setItem('status', status)
    })
  };
};

export const logout = (data,jwt) => {
  return {
    payload: axios.post(`${url}/user/logout`, {idUser:data},{
      headers: {
        "authorization": "x-control-user",
        "x-access-token": `bearer: ${jwt}`,
        "x-control-user": data
      }      
    })
  };
};