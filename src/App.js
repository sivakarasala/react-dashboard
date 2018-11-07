import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButton = styled.div`

`;

const AppLayout = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: 222px auto 100px 100px;

`;
class App extends Component {
  render() {
    return (
      <AppLayout>
      <Logo>
        Aum Namah Shivaya
      </Logo>
      <div>

      </div>
      <ControlButton>
        Dashboard
      </ControlButton>
      <ControlButton>
        Settings
      </ControlButton>
      </AppLayout>
    );
  }
}

export default App;
