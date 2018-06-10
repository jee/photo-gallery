import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGalleryContainer from 'photo-gallery/src/features/gallery/containers/photo-gallery-container';
import { shallow } from 'enzyme';

describe('PhotoGalleryContainer', () => {
  const mockPhotoData = {
    results: [
      {
        id: '9M54sNTIa-4',
        created_at: '2016-12-17T11:28:47-05:00',
        updated_at: '2018-05-18T13:11:26-04:00',
        width: 4623,
        height: 2942,
        color: '#F9F7F4',
        description:
          'Drone view of San Francisco Golden Gate Bridge over crystal blue water and harbor in background',
        urls: {
          raw:
            'https://images.unsplash.com/photo-1481991990414-7802ae5de1e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjI4NjcyfQ&s=910c89230ede097bb7d56b1e0a6bd7c3',
          full:
            'https://images.unsplash.com/photo-1481991990414-7802ae5de1e0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI4NjcyfQ&s=38867bda0b566fd0c55929d437ab6b68',
          regular:
            'https://images.unsplash.com/photo-1481991990414-7802ae5de1e0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI4NjcyfQ&s=a7102625da9b851f65789f01148954fc',
          small:
            'https://images.unsplash.com/photo-1481991990414-7802ae5de1e0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjI4NjcyfQ&s=81c060029eddf0e571e472b8c83df252',
          thumb:
            'https://images.unsplash.com/photo-1481991990414-7802ae5de1e0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjI4NjcyfQ&s=6e14879ac52abe51e98acb797fb15de2'
        }
      }
    ]
  };

  describe('should render', () => {
    it('when the root component is loaded', () => {
      const wrapper = shallow(<PhotoGalleryContainer photos={mockPhotoData} />);

      expect(wrapper.find('PhotoGallery').length).toBe(1);
    });
  });

  describe('should initialize state', () => {
    it('when the root component is loaded', () => {
      const wrapper = shallow(<PhotoGalleryContainer photos={mockPhotoData} />);
      expect(Object.keys(wrapper.state()).sort()).toEqual(['index', 'photos']);
    });
  });

  describe('should call class methods', () => {
    it('when navNextPhoto is triggered', () => {
      const wrapper = shallow(<PhotoGalleryContainer photos={mockPhotoData} />);

      const inst = wrapper.instance();
      const spy = jest.spyOn(inst, 'navNextPhoto');

      inst.navNextPhoto();
      expect(spy).toHaveBeenCalledTimes(1);

      inst.navNextPhoto();
      inst.navNextPhoto();

      expect(spy).toHaveBeenCalledTimes(3);
    });

    it('when navBackPhoto is triggered', () => {
      const wrapper = shallow(<PhotoGalleryContainer photos={mockPhotoData} />);

      const inst = wrapper.instance();
      const spy = jest.spyOn(inst, 'navBackPhoto');

      inst.navBackPhoto();
      expect(spy).toHaveBeenCalledTimes(1);

      inst.navBackPhoto();
      inst.navBackPhoto();

      expect(spy).toHaveBeenCalledTimes(3);
    });
  });
});
