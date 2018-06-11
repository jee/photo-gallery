// @flow
import React from 'react';
import Caption from './caption';

type PhotoProps = {
  index?: number,
  multiPhoto?: Object,
  singlePhoto?: Object
};

const Photo = ({ index, multiPhoto, singlePhoto }: PhotoProps) => {
  const currentPhoto = multiPhoto ? multiPhoto[index] : singlePhoto;

  return currentPhoto ? (
    <div className="Photo container-fluid">
      <div className="row">
        <figure className="col">
          <img
            src={currentPhoto.urls.full}
            className="img-fluid"
            alt={currentPhoto.description}
          />
          <Caption
            caption={currentPhoto.description}
            source={currentPhoto.urls.full}
          />
        </figure>
      </div>
    </div>
  ) : null;
};

export default Photo;
