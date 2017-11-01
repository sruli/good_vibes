import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import PlayIcon from '../../../../../../components/PlayIcon';
import PauseIcon from '../../../../../../components/PauseIcon';

const Toggler = ({ buttonColor, playing, onPlayPauseTapped }) => (
  <View style={styles.container}>
    <View style={[styles.toggler, { backgroundColor: buttonColor }]}>
      <TouchableOpacity
        onPress={onPlayPauseTapped}
        hitSlop={{
          top: 30,
          bottom: 30,
          left: 30,
          right: 30,
        }}
      >
        {
          playing ?
            <PauseIcon size={30} style={styles.icon} /> :
            <PlayIcon size={30} style={[styles.icon, styles.play]} />
        }
      </TouchableOpacity>
    </View>
  </View>
);

Toggler.propTypes = {
  buttonColor: PropTypes.string.isRequired,
  onPlayPauseTapped: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};

export default Toggler;
