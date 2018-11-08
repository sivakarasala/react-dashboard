import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import AppLayout from './AppLayout';
import WelcomeMessage from './WelcomeMessage';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <WelcomeMessage/>
        </AppProvider>
      </AppLayout>
    )
  }
}

export default App;
