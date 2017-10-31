import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Toggler = () => (
  <View style={styles.container}>
    <View style={styles.toggler}>
      <Icon name="ios-play" size={30} color="white" style={styles.icon} />
    </View>
  </View>
);

export default Toggler;
