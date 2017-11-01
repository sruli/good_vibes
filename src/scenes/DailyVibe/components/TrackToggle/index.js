import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import Toggler from './components/Toggler';
import SongDescription from './components/SongDescription';
import { getButtonColor } from '../../data/vibe/reducer';
import { getPlaying } from '../../reducer';
import { togglePlaying } from '../../actions';

const TrackToggle = ({ buttonColor, playing, onPlayPauseTapped }) => (
  <View style={styles.container}>
    <Toggler {...{ buttonColor, playing, onPlayPauseTapped }} />
    <SongDescription />
  </View>
);

TrackToggle.propTypes = {
  buttonColor: PropTypes.string.isRequired,
  onPlayPauseTapped: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  buttonColor: getButtonColor(state),
  playing: getPlaying(state),
});

const mapDispatchToProps = dispatch => ({
  onPlayPauseTapped: () => {
    dispatch(togglePlaying());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackToggle);
