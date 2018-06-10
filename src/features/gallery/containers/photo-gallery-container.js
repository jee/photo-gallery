// @flow
import React from 'react';
import PhotoGallery from '../components/photo-gallery';

type PhotoGalleryContainerProps = {
  photos: Object
};

type PhotoGalleryContainerState = {
  photos: Array<mixed>,
  index: number
};

class PhotoGalleryContainer extends React.Component<PhotoGalleryContainerProps, PhotoGalleryContainerState> {
  constructor(props: PhotoGalleryContainerProps) {
    super(props);

    this.state = {
      index: 0,
      photos: []
    };
  }

  componentDidMount() {
    if (this.props.photos && this.props.photos.results) {
      this.setState({
        photos: this.props.photos.results
      });
    }
  }

  navNextPhoto = () => {
    this.setState({
      index: this.state.index + 1
    });
  };

  navBackPhoto = () => {
    this.setState({
      index: this.state.index - 1
    });
  };

  render() {
    return (
      <div>
        {this.state.photos.length > 0 ? (
          <PhotoGallery
            photos={this.state.photos}
            index={this.state.index}
            navNextPhoto={this.navNextPhoto}
            navBackPhoto={this.navBackPhoto}
          />
        ) : null}
      </div>
    );
  }
}

export default PhotoGalleryContainer;