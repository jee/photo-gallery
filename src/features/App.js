// @flow
import React from 'react';
import './App.css';
import {MOCK_DATA} from '../utils/mock-api-data';

type AppProps = {};

type AppState = {
  photos: Array<mixed>
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.setState({
      photos: MOCK_DATA.results
    });
  }

  render() {
    return (
      <h1>{'Entry point'}</h1>
    );
  }
}

export default App;
