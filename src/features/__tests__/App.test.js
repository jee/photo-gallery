import React from 'react';
import ReactDOM from 'react-dom';
import App from 'photo-gallery/src/features/App';
import {shallow} from 'enzyme';

describe('App', () => {
  describe('should render', () => {
    it('without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('when the root component is loaded', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('PhotoGalleryContainer').length).toBe(1);
    });
  });
});
