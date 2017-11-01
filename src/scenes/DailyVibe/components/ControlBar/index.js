import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { currentImageChanged } from '../../actions';
import { getNextImage, getPreviousImage } from '../../reducer';

const ControlBar = ({
  nextImage,
  previousImage,
  onNextImageTapped,
  onPreviousImageTapped,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => { onPreviousImageTapped(previousImage); }}
      style={styles.element}
    >
      <Icon name="ios-arrow-back" size={30} color="white" />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {}}
      style={styles.element}
    >
      <Icon name="ios-pause" size={30} color="white" />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => { onNextImageTapped(nextImage); }}
      style={styles.element}
    >
      <Icon name="ios-arrow-forward" size={30} color="white" />
    </TouchableOpacity>
  </View>
);

ControlBar.propTypes = {
  nextImage: PropTypes.number.isRequired,
  onNextImageTapped: PropTypes.func.isRequired,
  onPreviousImageTapped: PropTypes.func.isRequired,
  previousImage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  nextImage: getNextImage(state),
  previousImage: getPreviousImage(state),
});

const mapDispatchToProps = dispatch => ({
  onNextImageTapped: (nextImage) => {
    dispatch(currentImageChanged(nextImage));
  },
  onPreviousImageTapped: (previousImage) => {
    dispatch(currentImageChanged(previousImage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);
