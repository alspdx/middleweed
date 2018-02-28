import constants from '../constants';
const { types } = constants;

export const requestStrainList = () => ({
  type: types.REQUEST_STRAINLIST
});

export const setStrainList = (list) => ({
  type: types.SET_STRAINLIST,
  list
});

export const selectStrain = (name, details) => ({
  type: types.SELECT_STRAIN,
  name,
  details
});

export const setDescription = (desc) => ({
  type: types.SET_DESCRIPTION,
  desc
});

export function fetchStrainList() {
  return function(dispatch) {
    dispatch(requestStrainList());
    return fetch(`http://strainapi.evanbusse.com/${constants.localApiKey}/strains/search/all`)
    .then(
      response => response.json(),
      error => console.log('There was an error fetching strain list!', error)
    ).then(
      function(json) {
        dispatch(setStrainList(json));
      }
    )
  }
}

export function fetchStrainDetails(name, details) {
  return function(dispatch) {
    dispatch(selectStrain(name, details));
    return fetch(`http://strainapi.evanbusse.com/${constants.localApiKey}/strains/data/desc/${details.id}`)
    .then(
      response => response.json(),
      error => console.log('There was an error fetching strain details!', error)
    ).then(
      function(json) {
        dispatch(setDescription(json.desc));
      }
    )
  }
}
