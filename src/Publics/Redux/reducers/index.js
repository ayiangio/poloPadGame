import {combineReducers} from 'redux';

import user from './user'
import board from './board'

const appReducer = combineReducers({
  user,
  board
});

export default appReducer;
