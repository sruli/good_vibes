import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import PlayIcon from '../../../components/icons/PlayIcon';

const HIT_SLOP = {
  bottom: 30,
  left: 30,
  right: 30,
  top: 30,
};

const PlayButton = ({ onPlayTapped, iconSize, iconStyles }) => (
  <TouchableOpacity
    onPress={onPlayTapped}
    hitSlop={HIT_SLOP}
  >
    <PlayIcon size={iconSize} style={iconStyles} />
  </TouchableOpacity>
);

PlayButton.propTypes = {
  iconSize: PropTypes.number,
  iconStyles: PropTypes.instanceOf(Array),
  onPlayTapped: PropTypes.func.isRequired,
};

PlayButton.defaultProps = {
  iconSize: 35,
  iconStyles: null,
};

export default PlayButton;
