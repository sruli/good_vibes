import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import Toggler from './components/Toggler';
import SongDescription from './components/SongDescription';
import { getBackgroundColor } from '../../data/vibe/reducer';

const TrackToggle = ({ backgroundColor }) => (
  <View style={styles.container}>
    <Toggler backgroundColor={backgroundColor} />
    <SongDescription />
  </View>
);

TrackToggle.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  backgroundColor: getBackgroundColor(state),
});

export default connect(mapStateToProps)(TrackToggle);
