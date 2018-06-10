// @flow
import React from 'react';
import Navigation from './navigation';
import Photo from './photo';
import PhotoCounter from './photo-counter';
import '../styles/photo-gallery.css';

type PhotoGalleryProps = {
  photos: any,
  index: number,
  maxIndex: number,
  navNextPhoto: () => void,
  navBackPhoto: () => void
};

const PhotoGallery = ({
  photos,
  index,
  maxIndex,
  navNextPhoto,
  navBackPhoto
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
          <Navigation chevron={'left'} onButtonClick={navBackPhoto} />
          <Photo index={index} photos={photos} />
          <Navigation chevron={'right'} onButtonClick={navNextPhoto} />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
