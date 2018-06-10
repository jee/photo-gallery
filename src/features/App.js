// @flow
import React from 'react';
import './App.css';
import PhotoGalleryContainer from './gallery/containers/photo-gallery-container';
import {MOCK_DATA} from '../utils/mock-api-data';

class App extends React.Component<*> {
  render() {
    return (
      <div>
        <PhotoGalleryContainer
          photos={MOCK_DATA}
        />
      </div>
    );
  }
}

export default App;
