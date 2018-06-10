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
    <div className="PhotoGallery container-fluid">
      <div className="row photo-box">
        <nav className="col-lg-1">
          <Navigation chevron={'left'} onButtonClick={navBackPhoto} />
        </nav>
        <article className="col-lg-10">
          <Photo index={index} photos={photos} />
        </article>
        <nav className="col-lg-1">
          <Navigation chevron={'right'} onButtonClick={navNextPhoto} />
        </nav>
      </div>
    </div>
  );
};

export default PhotoGallery;
