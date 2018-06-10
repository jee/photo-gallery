// @flow
import React from 'react';
import Caption from '../components/caption';

type CaptionContainerProps = {
  caption: string
}

class CaptionContainer extends React.Component<CaptionContainerProps> {
  render() {
    return (
      <div>
        <Caption caption={this.props.caption}/>
      </div>
    );
  }
}

export default CaptionContainer;
