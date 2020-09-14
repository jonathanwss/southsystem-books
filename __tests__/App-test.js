/* eslint-disable prettier/prettier */
/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import ImageList from '../src/Components/ImageList';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import HeaderTitle from '../src/Components/Headers/HeaderTitle';
import PageHeader from '../src/Components/Headers/PageHeader';
import PageHeaderTitle from '../src/Components/Headers/PageHeaderTitle';
import AvatarElement from '../src/Components/Avatar/AvatarElement';
import Launcher from '../src/Components/Launcher';

configure({adapter: new Adapter()});
describe('ImageList component', () => {
  describe('Snapshot tests', () => {
    it('Render Screen', () => {
      const render = new ShallowRenderer();
      const props = {};

      render.render(<ImageList { ...props } />);
      expect(render.getRenderOutput()).toMatchSnapshot();
    });
  });
  describe('Functional Tests', () => {
    it('Render renderItem of FlatList', () => {
      const props = {};
      const data = [{
        title: '',
        imageUri: '',
        data: undefined,
        isFavorite: false,
      }];
      const wrapper = shallow(<ImageList { ...props }  />);
      const flatList = wrapper.find('FlatList');
      const item = flatList.renderProp('renderItem')({ item: data });

      expect(item).toMatchSnapshot();
    });
  });
});

describe('Components tests', () => {
  describe('Snapshot tests', () => {
    it('Render Launcher', () => {
      const render = new ShallowRenderer();
      const props = {};

      render.render(<Launcher { ...props } />);
      expect(render.getRenderOutput()).toMatchSnapshot();
    });

    it('Render AvatarElement', () => {
      const render = new ShallowRenderer();
      const props = {};

      render.render(<AvatarElement { ...props } />);
      expect(render.getRenderOutput()).toMatchSnapshot();
    });

    it('Render HeaderTitle', () => {
      const render = new ShallowRenderer();
      const props = {};

      render.render(<HeaderTitle { ...props } />);
      expect(render.getRenderOutput()).toMatchSnapshot();
    });

    it('Render PageHeader', () => {
      const render = new ShallowRenderer();
      const props = {};

      render.render(<PageHeader { ...props } />);
      expect(render.getRenderOutput()).toMatchSnapshot();
    });

    it('Render PageHeaderTitle', () => {
      const render = new ShallowRenderer();
      const props = {};

      render.render(<PageHeaderTitle { ...props } />);
      expect(render.getRenderOutput()).toMatchSnapshot();
    });
  });
  describe('Functional tests', () => {
    it('On HeaderTitle description click', () => {
      const onPressEvent = jest.fn();
      onPressEvent.mockReturnValue('Invoked');

      const wrapper = shallow(<HeaderTitle actionDescription={ onPressEvent }  />);

      wrapper.find('TouchableOpacity').props().onPress();

      expect(onPressEvent.mock.calls.length).toBe(1);

    });
  });
});
