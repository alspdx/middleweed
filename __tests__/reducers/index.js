import constants from './../../src/constants';
import weedListReducer from './../../src/reducers/weedListReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('Middleweed', () => {
  const { types, initialState } = constants;
  const store = createStore(rootReducer);

  describe('weedListReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(weedListReducer(initialState.weedList, { type: null })).toEqual(initialState.weedList);
    });

    it('Should update state when API list is requested', () => {
      const action = actions.requestWeedList();
      const newStateSlice = {
        isFetching: true,
        list: {}
      }
      expect(weedListReducer(initialState.weedList, action)).toEqual(newStateSlice);
    })

    it('Should update state when API returns list', () => {
      const sampleList = {
        0: 'first-value',
        1: 'second-value'
      }
      const action = actions.setWeedList(sampleList);
      const newStateSlice = {
        isFetching: false,
        list: sampleList
      }
      expect(weedListReducer(initialState.weedList, action)).toEqual(newStateSlice);
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should contain logic from both reducers,', () => {
      expect(store.getState().weedList).toEqual(weedListReducer(initialState.weedList, { type: null }));
    });
  });
});
