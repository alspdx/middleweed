import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const StrainDetails = ({ selectedStrain }) => {
  return (
    <div className='strain-details'>
      <style jsx>{`
        .strain-details{
          background: honeydew;
          width: 70%;
          height: 100%;
        }
      `}</style>
      {(!selectedStrain.fetchingDesc && !selectedStrain.name)
        ? <h1>Please select a strain from the list!</h1>
        : (!selectedStrain.name
          ? <h1>no name</h1>
          :
          <div>
            <h1>{selectedStrain.name}</h1>
            <span><em>{selectedStrain.details.race}</em></span>
            <br />
            {selectedStrain.desc &&
              <span>{selectedStrain.desc}</span>
            }
          </div>
        )
      }
    </div>
  );
};

StrainDetails.propTypes = {
  selectedStrain: PropTypes.object
};

const mapStateToProps = state => {
  return {
    selectedStrain: state.selectedStrain
  };
};

export default connect(mapStateToProps)(StrainDetails);
