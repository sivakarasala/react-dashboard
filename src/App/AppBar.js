import styled, { css } from "styled-components";
import React, { Component } from 'react';
import {AppContext} from './AppProvider';

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03;
  `}
`;

function toProperCase(lower){
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}
function ControlButton({name, active}){
  return (
    <AppContext.Consumer>
      {({page, setPage}) => (
        <ControlButtonElem 
          onClick={() => setPage(name)}
          active={page === name}>
        {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  )
}

export default function(){
  return <Bar>
    <Logo>CryptoDash</Logo>
    <div></div>
    <ControlButton active name="dashboard"/>
    <ControlButton name="settings"/>
    </Bar>
}