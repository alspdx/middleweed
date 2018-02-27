import React from 'react';
import WeedList from './WeedList';
import { Switch, Route } from 'react-router-dom';
import { fetchWeedList } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function App({ dispatch }) {
  dispatch(fetchWeedList());
  return (
    <div>
      <h1>App works!</h1>
      <Switch>
        <Route exact path='/' component={WeedList} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(App);
