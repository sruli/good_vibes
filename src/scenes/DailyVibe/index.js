import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import ControlBar from './components/ControlBar';

const DailyVibe = () => (
  // eslint-disable-next-line global-require
  <Image style={styles.backgroundImage} source={require('./assets/1.jpg')}>
    <View style={styles.controlBar}>
      <ControlBar />
    </View>
  </Image>
);

export default DailyVibe;
