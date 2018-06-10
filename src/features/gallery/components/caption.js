// @flow
import React from 'react';

type CaptionProps = {
  caption: string
}

const Caption = ({caption}: CaptionProps) => {
  return (
    <div className="photo-caption">
      <p>{caption}</p>
    </div>
  );
};

export default Caption;
