import constants from '../constants';
const { types } = constants;

export const requestWeedList = () => ({
  type: types.REQUEST_WEEDLIST
});

export const setWeedList = (list) => ({
  type: types.SET_WEEDLIST,
  list
});

export function fetchWeedList() {
  return function(dispatch) {
    dispatch(requestWeedList());
    return fetch(`http://strainapi.evanbusse.com/${constants.localApiKey}/strains/search/all`)
    .then(
      response => response.json(),
      error => console.log('There was an error!', error)
    ).then(
      function(json) {
        console.log('YOU GOT A RESPONSE', json);
        dispatch(setWeedList(json));
      }
    )
  }
}
