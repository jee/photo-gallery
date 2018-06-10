import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../../components/navigation';
import { shallow } from 'enzyme';

describe('Navigation', () => {
  describe('should render', () => {
    it('when the root component is loaded', () => {
      const wrapper = shallow(<Navigation chevron={'left'} onButtonClick={jest.fn()} />);

      expect(wrapper.find('.Navigation').length).toBe(1);
    });

    it('with the chevron in the direction specified', () => {
      const wrapper = shallow(<Navigation chevron={'left'} onButtonClick={jest.fn()} />);

      expect(wrapper.find('.fa-chevron-right').length).toBe(0);
      expect(wrapper.find('.fa-chevron-left').length).toBe(1);

      wrapper.setProps({
        chevron: 'right'
      });

      expect(wrapper.find('.fa-chevron-right').length).toBe(1);
      expect(wrapper.find('.fa-chevron-left').length).toBe(0);
    });
  });

  describe('should trigger onClick callback', () => {
    it('when clicked', () => {
      const mockButtonClick = jest.fn();
      const wrapper = shallow(<Navigation chevron={'left'} onButtonClick={mockButtonClick} />);

      wrapper.props().onClick();

      expect(mockButtonClick).toHaveBeenCalledTimes(1);

    });
  });
});
