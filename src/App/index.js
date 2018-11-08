import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import AppLayout from './AppLayout';
import WelcomeMessage from './WelcomeMessage';
import AppBar from './AppBar';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar/>
        <WelcomeMessage/>
      </AppLayout>
    )
  }
}

export default App;
