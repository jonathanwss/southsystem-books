/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ImageList from '../src/Components/ImageList';

it('renders ImageList', () => {
  renderer.create(<ImageList />);
});
