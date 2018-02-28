import React from 'react';
import StrainList from './StrainList';
import { Switch, Route } from 'react-router-dom';
import { fetchStrainList } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function App({ dispatch }) {
  dispatch(fetchStrainList());
  return (
    <div>
      <h1>App works!</h1>
      <Switch>
        <Route exact path='/' component={StrainList} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(App);
