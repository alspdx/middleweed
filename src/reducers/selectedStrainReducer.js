import constants from './../constants';
const { initialState, types } = constants;

const selectedStrainReducer = (state = initialState.selectedStrain, action) => {
  let newSelectedStrain;
  switch (action.type) {
  case types.SELECT_STRAIN:
    newSelectedStrain = Object.assign({}, {
      name: action.name,
      details: action.details,
      fetchingDesc: true
    });
    return newSelectedStrain;
  case types.SET_DESCRIPTION:
    newSelectedStrain = Object.assign({}, state, {
      desc: action.desc,
      fetchingDesc: false
    });
    return newSelectedStrain;
  default:
    return state;
  }
}

export default selectedStrainReducer;
