import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SongDescription = ({ songDescription }) => (
  <Text style={styles.description}>{songDescription}</Text>
);

SongDescription.propTypes = {
  songDescription: PropTypes.string.isRequired,
};

export default SongDescription;
