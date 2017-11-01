import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { currentImageChanged, togglePlaying } from '../../actions';
import { getNextImage, getPlaying, getPreviousImage } from '../../reducer';
import PauseIcon from '../../../../components/PauseIcon';
import PlayIcon from '../../../../components/PlayIcon';

const HIT_SLOP = {
  bottom: 30,
  left: 30,
  right: 30,
  top: 30,
};

const ControlBar = ({
  nextImage,
  previousImage,
  playing,
  onNextImageTapped,
  onPlayPauseTapped,
  onPreviousImageTapped,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => { onPreviousImageTapped(previousImage); }}
      hitSlop={HIT_SLOP}
    >
      <Icon name="ios-arrow-back" size={35} color="white" />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={onPlayPauseTapped}
      hitSlop={HIT_SLOP}
    >
      { playing ? <PauseIcon /> : <PlayIcon /> }
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => { onNextImageTapped(nextImage); }}
      hitSlop={HIT_SLOP}
    >
      <Icon name="ios-arrow-forward" size={35} color="white" />
    </TouchableOpacity>
  </View>
);

ControlBar.propTypes = {
  nextImage: PropTypes.number.isRequired,
  onNextImageTapped: PropTypes.func.isRequired,
  onPlayPauseTapped: PropTypes.func.isRequired,
  onPreviousImageTapped: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  previousImage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  nextImage: getNextImage(state),
  playing: getPlaying(state),
  previousImage: getPreviousImage(state),
});

const mapDispatchToProps = dispatch => ({
  onNextImageTapped: (nextImage) => {
    dispatch(currentImageChanged(nextImage));
  },
  onPreviousImageTapped: (previousImage) => {
    dispatch(currentImageChanged(previousImage));
  },
  onPlayPauseTapped: () => {
    dispatch(togglePlaying());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);
