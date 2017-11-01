import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import Toggler from './components/Toggler';
import SongDescription from './components/SongDescription';
import { getButtonColor } from '../../data/vibe/reducer';

const TrackToggle = ({ buttonColor }) => (
  <View style={styles.container}>
    <Toggler buttonColor={buttonColor} />
    <SongDescription />
  </View>
);

TrackToggle.propTypes = {
  buttonColor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  buttonColor: getButtonColor(state),
});

export default connect(mapStateToProps)(TrackToggle);
