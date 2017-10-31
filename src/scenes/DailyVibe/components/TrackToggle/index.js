import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Toggler from './components/Toggler';
import SongDescription from './components/SongDescription';

const TrackToggle = () => (
  <View style={styles.container}>
    <Toggler />
    <SongDescription />
  </View>
);

export default TrackToggle;
