import React from 'react';
import ReactDOM from 'react-dom';
import { PhotoGalleryContainer } from 'photo-gallery/src/features/gallery/containers/photo-gallery-container';
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
      },
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
      },
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
      expect(Object.keys(wrapper.state()).sort()).toEqual([
        'index',
        'maxIndex',
        'photos',
        'width'
      ]);
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

    it('when handleWindowSizeChange is triggered', () => {
      const wrapper = shallow(<PhotoGalleryContainer photos={mockPhotoData} />);

      const inst = wrapper.instance();
      const spy = jest.spyOn(inst, 'handleWindowSizeChange');

      inst.handleWindowSizeChange();
      expect(spy).toHaveBeenCalledTimes(1);

      inst.handleWindowSizeChange();
      inst.handleWindowSizeChange();

      expect(spy).toHaveBeenCalledTimes(3);
    });

    it('when the ReactSwipe swipeOptions callback is triggered', () => {
      const wrapper = shallow(<PhotoGalleryContainer photos={mockPhotoData} />);

      const inst = wrapper.instance();
      const navNextSpy = jest.spyOn(inst, 'navNextPhoto');
      const navBackSpy = jest.spyOn(inst, 'navBackPhoto');

      wrapper.children().props().swipeOptions.callback(1);
      expect(navNextSpy).toHaveBeenCalledTimes(1);
      expect(navBackSpy).toHaveBeenCalledTimes(0);

      wrapper.children().props().swipeOptions.callback(0);
      expect(navNextSpy).toHaveBeenCalledTimes(1);
      expect(navBackSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('should not go under index 0 and over maxIndex', () => {
    it('when navNextPhoto is triggered', () => {
      expect.assertions(5);
      const wrapper = shallow(<PhotoGalleryContainer photos={mockPhotoData} />);
      const inst = wrapper.instance();

      expect(wrapper.state().index).toBe(0);

      inst.navNextPhoto();
      expect(wrapper.state().index).toBe(1);

      inst.navNextPhoto();
      expect(wrapper.state().index).toBe(2);

      inst.navNextPhoto();
      expect(wrapper.state().index).toBe(2);

      inst.navNextPhoto();
      expect(wrapper.state().index).toBe(2);
    });

    it('when navBackPhoto is triggered', () => {
      expect.assertions(5);
      const wrapper = shallow(<PhotoGalleryContainer photos={mockPhotoData} />);
      const inst = wrapper.instance();

      expect(wrapper.state().index).toBe(0);

      inst.navNextPhoto();
      inst.navNextPhoto();

      expect(wrapper.state().index).toBe(2);

      inst.navBackPhoto();
      expect(wrapper.state().index).toBe(1);

      inst.navBackPhoto();
      expect(wrapper.state().index).toBe(0);

      inst.navBackPhoto();
      expect(wrapper.state().index).toBe(0);
    });
  });

  describe('should properly calculate isMobile', () => {
    it('when window size is less than or equal to 500px', () => {
      const wrapper = shallow(<PhotoGalleryContainer photos={mockPhotoData} />);
      const inst = wrapper.instance();

      inst.handleWindowSizeChange();
      expect(wrapper.state().width).toBeGreaterThanOrEqual(500);
      expect(wrapper.children().props().isMobile).toBe(false);

      global.innerWidth = 450;
      global.dispatchEvent(new Event('resize'));
      inst.handleWindowSizeChange();

      expect(wrapper.state().width).toBeLessThanOrEqual(500);
      wrapper.update();

      expect(wrapper.children().props().isMobile).toBe(true);
    });

    it('when window size is greater than or equal to 500px', () => {
      const wrapper = shallow(<PhotoGalleryContainer photos={mockPhotoData} />);
      const inst = wrapper.instance();

      global.innerWidth = 1024;
      global.dispatchEvent(new Event('resize'));
      inst.handleWindowSizeChange();
      wrapper.update();

      expect(wrapper.state().width).toBeGreaterThanOrEqual(500);
      expect(wrapper.children().props().isMobile).toBe(false);
    });
  });
});
