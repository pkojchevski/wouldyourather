import React from 'react';
import PropTypes from 'prop-types';
import { FaTrophy } from 'react-icons/fa'

const TrophyCup = ({color}) => {
    return (
        <div className="trophy">
        <FaTrophy style={{color}} />
      </div>
    );
};


TrophyCup.propTypes = {
   color:PropTypes.string.isRequired
};


export default TrophyCup;
