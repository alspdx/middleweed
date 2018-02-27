import constants from './../constants';
const { initialState, types } = constants;

const weedListReducer = (state = initialState.weedList, action) => {
  let newWeedList = {};
  switch (action.type) {

    case types.REQUEST_WEEDLIST:
      newWeedList = {
        isFetching: true,
        list: {}
      }
      const newStateSlice = Object.assign({}, newWeedList);
      return newStateSlice

    case types.SET_WEEDLIST:
      newWeedList = {
        isFetching: false,
        list: action.list
      }
      const newStateWithList = Object.assign({}, newWeedList);
      return newStateWithList;

    default:
      return state;
  }
}

export default weedListReducer;
