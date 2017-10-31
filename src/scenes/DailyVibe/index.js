import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import ControlBar from './components/ControlBar';
import TrackToggle from './components/TrackToggle';

const DailyVibe = () => (
  // eslint-disable-next-line global-require
  <Image style={styles.backgroundImage} source={require('./assets/1.jpg')}>
    <View style={styles.trackToggle}>
      <TrackToggle />
    </View>
    <View style={styles.controlBar}>
      <ControlBar />
    </View>
  </Image>
);

export default DailyVibe;
