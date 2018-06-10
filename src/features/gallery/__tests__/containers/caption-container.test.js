// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import CaptionContainer from 'photo-gallery/src/features/gallery/containers/caption-container';
import { shallow } from 'enzyme';

describe('CaptionContainer', () => {
  describe('should render', () => {
    it('when the root component is loaded', () => {
      const wrapper = shallow(<CaptionContainer caption={'Test'} />);

      expect(wrapper.find('Caption').length).toBe(1);
    });
  });
});
