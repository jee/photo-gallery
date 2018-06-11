// @flow
import React from 'react';
import Navigation from './navigation';
import Photo from './photo';
import PhotoCounter from './photo-counter';
import ReactSwipe from 'react-swipe';
import '../styles/photo-gallery.css';

type PhotoGalleryProps = {
  photos: any,
  index: number,
  maxIndex: number,
  navNextPhoto: () => void,
  navBackPhoto: () => void,
  isMobile: boolean,
  swipeOptions: Object
};

const PhotoGallery = ({
  photos,
  index,
  maxIndex,
  navNextPhoto,
  navBackPhoto,
  isMobile,
  swipeOptions
}: PhotoGalleryProps) => {
  return (
    <div className="PhotoGallery">
      <div className="container">
        <div className="row counter align-items-end">
          <div className="col text-center">
            <PhotoCounter index={index + 1} maxIndex={maxIndex + 1} />
          </div>
        </div>
        <div className="row photo align-items-start">
          {isMobile ? (
            <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
              {photos.map(photo => {
                return (
                  <div key={photo.id}>
                    <Photo singlePhoto={photo} />
                  </div>
                );
              })}
            </ReactSwipe>
          ) : (
            <div>
              <Navigation chevron={'left'} onButtonClick={navBackPhoto} />
              <Photo index={index} multiPhoto={photos} />
              <Navigation chevron={'right'} onButtonClick={navNextPhoto} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
