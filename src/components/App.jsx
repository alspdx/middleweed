import React from 'react';
import StrainList from './StrainList';
import StrainDetails from './StrainDetails';
import { fetchStrainList } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function App({ dispatch }) {
  dispatch(fetchStrainList());
  return (
    <div className='wrapper'>
      <style jsx global>{`
        body {
          margin: 0;
          height: 100vh;
        }
        #react-app-root {
          height: 100%;
        }
      `}</style>
      <style jsx>{`
        .wrapper {
          display: flex;
          height: 100%;
        }
      `}</style>
      <StrainList />
      <StrainDetails />
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(App);
