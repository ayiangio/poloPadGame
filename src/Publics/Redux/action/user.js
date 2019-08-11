import axios from 'axios';
import { AsyncStorage } from 'react-native'

export const addUser = (data) => {
  return {
    type: 'REGISTER',
    payload: axios.post(`https://apilib.herokuapp.com/user/register`, data)
  };
};
export const login = (data) => {
  console.log(data)
  return {
    type: 'LOGIN',
    payload: axios.post(`https://apilib.herokuapp.com/user/login`, data, 
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
    payload: axios.post(`https://apilib.herokuapp.com/user/logout`, {idUser:data},{
      headers: {
        "authorization": "x-control-user",
        "x-access-token": `bearer: ${jwt}`,
        "x-control-user": data
      }      
    })
  };
};