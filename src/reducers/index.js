import { combineReducers } from 'redux';
import weedListReducer from './weedListReducer';

const rootReducer = combineReducers ({
  weedList: weedListReducer
});

export default rootReducer;
