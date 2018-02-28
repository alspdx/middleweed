import { connect } from 'react-redux';
import { fetchStrainDetails } from '../actions';
import PropTypes from 'prop-types';
import React from 'react';

const StrainList = ({ strainList, dispatch }) => {
  return (
    <div className='strain-list'>
      <style jsx>{`
        .strain-list {
          width: 30%;
          height: 100%;
          background: peachpuff;
        }
      `}</style>
      {strainList.isFetching
        ? <h1>Waiting for response...</h1>
        : <h1>Select a pot from our list of {Object.keys(strainList.list).length} different strains!</h1>
      }
      {Object.keys(strainList.list).map(strainId => {
        const strain = strainList.list[strainId];
        return <li key={strainId} onClick={() => dispatch(fetchStrainDetails(strainId, strain))}>{strainId}</li>;
      })}
    </div>
  );
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
