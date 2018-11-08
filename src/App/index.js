import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import AppLayout from './AppLayout';
import Settings from '../Settings';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Content from '../Shared/Content';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Content>
            <Settings/>
          </Content>
        </AppProvider>
      </AppLayout>
    )
  }
}

export default App;
