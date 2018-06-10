// @flow
import React from 'react';
import Navigation from './navigation';
import Photo from './photo';
import '../styles/photo-gallery.css';

type PhotoGalleryProps = {
  photos: any,
  index: number,
  navNextPhoto: () => void,
  navBackPhoto: () => void
};

const PhotoGallery = ({
  photos,
  index,
  navNextPhoto,
  navBackPhoto
}: PhotoGalleryProps) => {
  return (
    <div className="PhotoGallery container-fluid shade">
      <div className="row photo-box">
        <div className="col-12">
          <Navigation chevron={'left'} onButtonClick={navBackPhoto} />
          <Photo index={index} photos={photos} />
          <Navigation chevron={'right'} onButtonClick={navNextPhoto} />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
