import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const PlayIcon = ({ size, style, color }) => (
  <Icon name="ios-play" {...{ size, color, style }} />
);

PlayIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

PlayIcon.defaultProps = {
  color: 'white',
  size: 35,
  style: null,
};

export default PlayIcon;
