import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Toggler = ({ buttonColor }) => (
  <View style={styles.container}>
    <View style={[styles.toggler, { backgroundColor: buttonColor }]}>
      <Icon name="ios-play" size={30} color="white" style={styles.icon} />
    </View>
  </View>
);

Toggler.propTypes = {
  buttonColor: PropTypes.string.isRequired,
};

export default Toggler;
