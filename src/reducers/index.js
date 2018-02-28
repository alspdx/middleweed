import { combineReducers } from 'redux';
import strainListReducer from './strainListReducer';
import selectedStrainReducer from './selectedStrainReducer';

const rootReducer = combineReducers ({
  strainList: strainListReducer,
  selectedStrain: selectedStrainReducer
});

export default rootReducer;
