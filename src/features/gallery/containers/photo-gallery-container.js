// @flow
import React from 'react';
import PhotoGallery from '../components/photo-gallery';

type PhotoGalleryContainerProps = {
  photos: Object
};

type PhotoGalleryContainerState = {
  photos: Array<mixed>,
  index: number,
  maxIndex: number,
  width: number
};

export class PhotoGalleryContainer extends React.Component<
  PhotoGalleryContainerProps,
  PhotoGalleryContainerState
> {
  constructor(props: PhotoGalleryContainerProps) {
    super(props);

    this.state = {
      index: 0,
      maxIndex: 0,
      photos: [],
      width: window.innerWidth
    };
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  componentDidMount() {
    if (this.props.photos && this.props.photos.results) {
      this.setState({
        photos: this.props.photos.results,
        maxIndex: this.props.photos.results.length - 1
      });
    }
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  navNextPhoto = () => {
    if (this.state.index + 1 <= this.state.maxIndex) {
      this.setState({
        index: this.state.index + 1
      });
    }
  };

  navBackPhoto = () => {
    if (this.state.index - 1 > -1) {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    const swipeOptions = {
      callback: swipeIndex => {
        if (swipeIndex > this.state.index) {
          this.navNextPhoto();
        } else {
          this.navBackPhoto();
        }
      },
      continuous: false
    };

    return (
      <div>
        {this.state.photos.length > 0 ? (
          <PhotoGallery
            photos={this.state.photos}
            index={this.state.index}
            maxIndex={this.state.maxIndex}
            navNextPhoto={this.navNextPhoto}
            navBackPhoto={this.navBackPhoto}
            isMobile={isMobile}
            swipeOptions={swipeOptions}
          />
        ) : null}
      </div>
    );
  }
}
