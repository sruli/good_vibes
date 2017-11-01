import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import PlayButton from '../../../../../../components/buttons/PlayButton';
import PauseButton from '../../../../../../components/buttons/PauseButton';

const Toggler = ({
  buttonColor,
  playing,
  onPlayTapped,
  onPauseTapped,
}) => (
  <View style={styles.container}>
    <View style={[styles.toggler, { backgroundColor: buttonColor }]}>
      {
        playing ?
          <PauseButton iconSize={30} iconStyles={styles.icon} {...{ onPauseTapped }} /> :
          <PlayButton iconSize={30} iconStyles={[styles.icon, styles.play]} {...{ onPlayTapped }} />
      }
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
