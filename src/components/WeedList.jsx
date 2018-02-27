import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const WeedList = ({ weedList }) => {
  if (weedList.list[0]) {
    return <h1>There's a list!</h1>;
  } else {
    return <h1>There's no list!</h1>;
  }
  // return (
  //   <div>
  //     <h1>Select a weed from our list!</h1>
  //     {Object.keys(weedList.list).map(weedId => {
  //       return <li key={weedId}>{weedId}</li>;
  //     })}
  //   </div>
  // );
};

WeedList.propTypes = {
  dispatch: PropTypes.func,
  weedList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    weedList: state.weedList
  };
};

export default connect(mapStateToProps)(WeedList);
