/* eslint-disable */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DailyVibe from './index';

describe('<DailyVibe />', () => {
  it('renders a <DailyVibe>', () => {
    const tree = renderer.create(<DailyVibe />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
