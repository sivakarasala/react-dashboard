import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const CustomElement = styled.div`
  font-size: 30px;
`;

const BlueElement = styled(CustomElement)`
`;
class App extends Component {
  render() {
    return (
      <div>
      <CustomElement>
        Aum Namah Shivaya
      </CustomElement>
      <BlueElement>
        Shambho Shankara
      </BlueElement>
      </div>
    );
  }
}

export default App;
