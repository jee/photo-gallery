// @flow
import React from 'react';
import '../styles/caption.css';

type CaptionProps = {
  caption: string
}

const Caption = ({caption}: CaptionProps) => {
  return (
    <div className="Caption figure">
      <p className="figure-caption">{caption}</p>
    </div>
  );
};

export default Caption;
