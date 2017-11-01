import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ControlBar = () => (
  <View style={styles.container}>
    <Icon name="ios-arrow-back" size={30} color="white" />
    <Icon name="ios-pause" size={30} color="white" />
    <Icon name="ios-arrow-forward" size={30} color="white" />
  </View>
);

export default ControlBar;
