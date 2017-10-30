import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

export default () => (
  <Image
    style={styles.backgroundImage}
    source={require('./assets/1.jpg')} // eslint-disable-line global-require
  />
);
