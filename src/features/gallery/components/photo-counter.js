// @flow
import React from 'react';

type PhotoCounterProps = {
  index: number,
  maxIndex: number
};

const PhotoCounter = ({ index, maxIndex }: PhotoCounterProps) => {
  return (
    <div className="PhotoCounter">
      {index}&nbsp;{'/'}&nbsp;{maxIndex}
    </div>
  );
};

export default PhotoCounter;
