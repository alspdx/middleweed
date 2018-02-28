import constants from './../../src/constants';
import strainListReducer from './../../src/reducers/strainListReducer';
import selectedStrainReducer from './../../src/reducers/selectedStrainReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('Middleweed', () => {
  const { types, initialState } = constants;
  const store = createStore(rootReducer);

  describe('strainListReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(strainListReducer(initialState.strainList, { type: null })).toEqual(initialState.strainList);
    });

    it('Should update state when API list is requested', () => {
      const action = actions.requestStrainList();
      const newStateSlice = {
        isFetching: true,
        list: {}
      }
      expect(strainListReducer(initialState.strainList, action)).toEqual(newStateSlice);
    });

    it('Should update state when API returns list', () => {
      const sampleList = {
        0: 'first-value',
        1: 'second-value'
      }
      const action = actions.setStrainList(sampleList);
      const newStateSlice = {
        isFetching: false,
        list: sampleList
      }
      expect(strainListReducer(initialState.strainList, action)).toEqual(newStateSlice);
    });
  });

  describe('selectedStrainReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(selectedStrainReducer(initialState.selectedStrain, { type: null })).toEqual(initialState.selectedStrain);
    });

    it('Should set the selected strain when strain name clicked.', () => {
      const sampleName = 'Hindu Kush';
      const sampleDetails = {
        effects: {},
        flavors: {},
        id: 1026,
        race: "indica"
      };
      const action = actions.selectStrain(sampleName, sampleDetails);
      const newStateSlice = {
        fetchingDesc: true,
        name: sampleName,
        details: sampleDetails
      }
      expect(selectedStrainReducer(initialState.selectedStrain, action)).toEqual(newStateSlice);
    });

    it('Should update state when the API returns strain description', () => {
      const sampleDesc = 'Hindu Kush is a pure indica strain named after the mountain range stretching 500 miles between Pakistan and Afghanistan where it originated. The harsh climate of its homeland has conditioned this strain to express a thick, protective coat of crystal trichomes cherished by hash makers worldwide. With a subtle sweet and earthy sandalwood aroma, Hindu Kush induces a deep sense of calm that helps bring relief to those suffering pain, nausea, and stress disorders.';
      const newStateSlice = {
        fetchingDesc: false,
        desc: sampleDesc
      };
      const action = actions.setDescription(sampleDesc);
      expect(selectedStrainReducer(initialState.selectedStrain, action)).toEqual(newStateSlice);
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should contain logic from both reducers,', () => {
      expect(store.getState().strainList).toEqual(strainListReducer(initialState.strainList, { type: null }));
      expect(store.getState().selectedStrain).toEqual(selectedStrainReducer(initialState.selectedStrain, { type: null }));
    });
  });
});
