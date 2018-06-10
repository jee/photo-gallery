// @flow
import React from 'react';
import '../styles/navigation.css';

type NavigationProps = {
  chevron: string,
  onButtonClick: () => void
};

const Navigation = ({chevron, onButtonClick}: NavigationProps) => {
  return (
    <div className={`Navigation float-${chevron} overlay-${chevron}`} onClick={onButtonClick}>
      <i className={`fas fa-chevron-${chevron} fa-3x`} />
    </div>
  );
};

export default Navigation;
