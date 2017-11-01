import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import PauseIcon from '../../../components/icons/PauseIcon';

const HIT_SLOP = {
  bottom: 30,
  left: 30,
  right: 30,
  top: 30,
};

const PauseButton = ({ onPauseTapped, iconSize, iconStyles }) => (
  <TouchableOpacity
    onPress={onPauseTapped}
    hitSlop={HIT_SLOP}
  >
    <PauseIcon size={iconSize} style={iconStyles} />
  </TouchableOpacity>
);

PauseButton.propTypes = {
  iconSize: PropTypes.number,
  iconStyles: PropTypes.number,
  onPauseTapped: PropTypes.func.isRequired,
};

PauseButton.defaultProps = {
  iconSize: 35,
  iconStyles: null,
};

export default PauseButton;
