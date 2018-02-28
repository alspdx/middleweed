import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStrainDetails } from '../actions';

const StrainList = ({ strainList, dispatch }) => {
  if (strainList.isFetching) {
    return <h1>Waiting for response...</h1>;
  } else {
    return (
      <div>
        <h1>Select a pot from our list of {Object.keys(strainList.list).length} different strains!</h1>
        {Object.keys(strainList.list).map(strainId => {
          const strain = strainList.list[strainId];
          return <li key={strainId} onClick={() => dispatch(fetchStrainDetails(strainId, strain))}>{strainId}</li>;
        })}
      </div>
    );
  }
};

StrainList.propTypes = {
  dispatch: PropTypes.func,
  strainList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    strainList: state.strainList
  };
};

export default connect(mapStateToProps)(StrainList);
