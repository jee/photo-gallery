import React from 'react';
import ReactDOM from 'react-dom';
import PhotoCounter from '../../components/photo-counter';
import { shallow } from 'enzyme';

describe('PhotoGallery', () => {
  describe('should render', () => {
    it('when the root component is loaded', () => {
      const wrapper = shallow(<PhotoCounter index={1} maxIndex={15} />);

      expect(wrapper.find('.PhotoCounter').length).toBe(1);
    });
  });
});
