import React, { Component } from 'react';
import styled from 'styled-components';

const CustomElement = styled.div`
  color: skyblue;
  font-size: 30px;
`;

const BlueElement = styled(CustomElement)`
  color: orange;
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
