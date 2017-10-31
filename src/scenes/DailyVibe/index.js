import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import ControlBar from './components/ControlBar';
import TrackToggle from './components/TrackToggle';
import { vibeFetched } from './data/vibe/actions';
import { getCurrentImage } from './data/vibe/reducer';

class DailyVibe extends Component {
  compponentDidMount() {
    this.props.onVibeMounted();
  }

  render() {
    return (
      // eslint-disable-next-line global-require
      <Image style={styles.backgroundImage} source={this.props.backgroundImage}>
        <View style={styles.trackToggle}>
          <TrackToggle />
        </View>
        <View style={styles.controlBar}>
          <ControlBar />
        </View>
      </Image>
    );
  }
}

DailyVibe.propTypes = {
};

const mapStateToProps = state => ({
  backgroundImage: getCurrentImage(state),
});

const mapDispatchToProps = dispatch => ({
  onVibeMounted: dispatch(vibeFetched()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyVibe);

