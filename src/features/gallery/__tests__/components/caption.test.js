import React from 'react';
import ReactDOM from 'react-dom';
import Caption from 'photo-gallery/src/features/gallery/components/caption';
import { shallow } from 'enzyme';

describe('Caption', () => {
  describe('should render', () => {
    it('when the root component is loaded', () => {
      const wrapper = shallow(<Caption caption={'Testing'} />);

      expect(wrapper.find('.photo-caption').length).toBe(1);
    });

    it('with caption text when the caption prop is passed in', () => {
      const wrapper = shallow(<Caption caption={'This is a caption!'} />);
      const text = wrapper.find('.photo-caption').text();
      expect(text).toEqual('This is a caption!');
    });
  });
});
