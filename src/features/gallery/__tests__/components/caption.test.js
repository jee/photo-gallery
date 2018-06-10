import React from 'react';
import ReactDOM from 'react-dom';
import Caption from 'photo-gallery/src/features/gallery/components/caption';
import { shallow } from 'enzyme';

describe('Caption', () => {
  describe('should render', () => {
    it('when the root component is loaded', () => {
      const wrapper = shallow(<Caption caption={'Testing'} source={'http://via.placeholder.com/350x150'} />);

      expect(wrapper.find('.figure-caption').length).toBe(1);
    });

    it('with caption text when the caption prop is passed in', () => {
      const wrapper = shallow(<Caption caption={'This is a caption!'} source={'http://via.placeholder.com/350x150'} />);
      const text = wrapper.find('.image-caption').text();
      expect(text).toEqual('This is a caption!');
    });

    it('with a link to the image source when the source prop is passed in', () => {
      const wrapper = shallow(<Caption caption={'This is a caption!'} source={'http://via.placeholder.com/350x150'} />);
      const imageSource = wrapper.find('a').props().href;
      expect(imageSource).toEqual('http://via.placeholder.com/350x150');
    });
  });
});
