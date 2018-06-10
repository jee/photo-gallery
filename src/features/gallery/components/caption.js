// @flow
import React from 'react';
import '../styles/caption.css';

type CaptionProps = {
  caption: string,
  source: string
};

const Caption = ({ caption, source }: CaptionProps) => {
  return (
    <div className="Caption figure">
      <div className="figure-caption custom">
        <p className="caption-text my-auto">{caption}</p>
        <small className="text-muted image-source">
          <a href={source} target="_blank" rel="noopener noreferrer">
            source
          </a>
        </small>
      </div>
    </div>
  );
};

export default Caption;
