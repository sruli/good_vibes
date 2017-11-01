import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import Toggler from './components/Toggler';
import SongDescription from './components/SongDescription';
import { getButtonColor } from '../../data/vibe/reducer';
import { getPlaying } from '../../reducer';
import { playTapped, pauseTapped } from '../../actions';

const TrackToggle = ({
  buttonColor,
  playing,
  onPlayTapped,
  onPauseTapped,
}) => (
  <View style={styles.container}>
    <Toggler {...{
      buttonColor,
      playing,
      onPlayTapped,
      onPauseTapped,
    }}
    />
    <SongDescription />
  </View>
);

TrackToggle.propTypes = {
  buttonColor: PropTypes.string.isRequired,
  onPlayTapped: PropTypes.func.isRequired,
  onPauseTapped: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  buttonColor: getButtonColor(state),
  playing: getPlaying(state),
});

const mapDispatchToProps = dispatch => ({
  onPlayTapped: () => {
    dispatch(playTapped());
  },
  onPauseTapped: () => {
    dispatch(pauseTapped());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackToggle);
