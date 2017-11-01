import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import PlayIcon from '../../../../../../components/PlayIcon';
import PauseIcon from '../../../../../../components/PauseIcon';

const HIT_SLOP = {
  bottom: 30,
  left: 30,
  right: 30,
  top: 30,
};

const PlayButton = ({ onPlayTapped }) => (
  <TouchableOpacity
    onPress={onPlayTapped}
    hitSlop={HIT_SLOP}
  >
    <PlayIcon size={30} style={[styles.icon, styles.play]} />
  </TouchableOpacity>
);

PlayButton.propTypes = {
  onPlayTapped: PropTypes.func.isRequired,
};

const PauseButton = ({ onPauseTapped }) => (
  <TouchableOpacity
    onPress={onPauseTapped}
    hitSlop={HIT_SLOP}
  >
    <PauseIcon size={30} style={styles.icon} />
  </TouchableOpacity>
);

PauseButton.propTypes = {
  onPauseTapped: PropTypes.func.isRequired,
};

const Toggler = ({
  buttonColor,
  playing,
  onPlayTapped,
  onPauseTapped,
}) => (
  <View style={styles.container}>
    <View style={[styles.toggler, { backgroundColor: buttonColor }]}>
      { playing ? <PauseButton {...{ onPauseTapped }} /> : <PlayButton {...{ onPlayTapped }} /> }
    </View>
  </View>
);

Toggler.propTypes = {
  buttonColor: PropTypes.string.isRequired,
  onPlayTapped: PropTypes.func.isRequired,
  onPauseTapped: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};

export default Toggler;
