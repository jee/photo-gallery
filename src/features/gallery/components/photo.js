// @flow
import React from 'react';
import Caption from './caption';

type PhotoProps = {
  index: number,
  photos: any
};

const Photo = ({ index, photos }: PhotoProps) => {
  return (
    <div className="Photo container-fluid">
      <div className="row photo-box">
        <figure className="col-lg-12">
          <img
            src={photos[index].urls.full}
            className="img-fluid mx-auto d-block"
            alt={photos[index].description}
          />
          <Caption caption={photos[index].description} source={photos[index].urls.full} />
        </figure>
      </div>
    </div>
  );
};

export default Photo;
