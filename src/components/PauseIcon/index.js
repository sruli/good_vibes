import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const PauseIcon = ({ size, style, color }) => (
  <Icon name="ios-pause" {...{ size, color, style }} />
);

PauseIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.number,
};

PauseIcon.defaultProps = {
  color: 'white',
  size: 35,
  style: null,
};

export default PauseIcon;

