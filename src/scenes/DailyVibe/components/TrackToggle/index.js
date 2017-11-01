import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import Toggler from './components/Toggler';
import SongDescription from './components/SongDescription';
import { getButtonColor } from '../../data/vibe/reducer';
import { getPlaying } from '../../reducer';

const TrackToggle = ({ buttonColor, playing }) => (
  <View style={styles.container}>
    <Toggler {...{ buttonColor, playing }} />
    <SongDescription />
  </View>
);

TrackToggle.propTypes = {
  buttonColor: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  buttonColor: getButtonColor(state),
  playing: getPlaying(state),
});

export default connect(mapStateToProps)(TrackToggle);
