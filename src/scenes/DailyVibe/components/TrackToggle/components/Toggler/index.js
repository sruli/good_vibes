import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import PlayIcon from '../../../../../../components/PlayIcon';
import PauseIcon from '../../../../../../components/PauseIcon';

const Toggler = ({ buttonColor, playing }) => (
  <View style={styles.container}>
    <View style={[styles.toggler, { backgroundColor: buttonColor }]}>
      {
        playing ?
          <PauseIcon size={30} style={styles.icon} /> :
          <PlayIcon size={30} style={[styles.icon, styles.play]} />
      }
    </View>
  </View>
);

Toggler.propTypes = {
  buttonColor: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
};

export default Toggler;
