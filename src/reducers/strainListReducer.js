import constants from './../constants';
const { initialState, types } = constants;

const strainListReducer = (state = initialState.strainList, action) => {
  let newStrainList
  switch (action.type) {
  case types.REQUEST_STRAINLIST:
    newStrainList = {
      isFetching: true,
      list: {}
    }
    const newStateSlice = Object.assign({}, newStrainList);
    return newStateSlice
  case types.SET_STRAINLIST:
    newStrainList = {
      isFetching: false,
      list: action.list
    }
    const newStateWithList = Object.assign({}, newStrainList);
    return newStateWithList;
  default:
    return state;
  }
}

export default strainListReducer;
