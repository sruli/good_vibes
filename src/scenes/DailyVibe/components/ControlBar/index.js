import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ControlBar = () => (
  <View style={styles.container}>
    <Icon name="ios-arrow-back" size={30} color="#fff" />
    <Icon name="ios-pause" size={30} color="#fff" />
    <Icon name="ios-arrow-forward" size={30} color="#fff" />
  </View>
);

export default ControlBar;
