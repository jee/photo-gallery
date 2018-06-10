// @flow
import React from 'react';
import CaptionContainer from '../containers/caption-container';

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
    <div>
      <CaptionContainer caption={photos[index].description} />
      <div className="current-photo">
        <img src={photos[index].urls.regular} />
      </div>
      <div>
        <h1 onClick={navNextPhoto}>NEXT</h1>
        <h1 onClick={navBackPhoto}>BACK</h1>
      </div>
    </div>
  );
};

export default PhotoGallery;
