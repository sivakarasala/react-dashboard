import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import AppBar from './AppBar';
const cc = require('cryptocompare');


const AppLayout = styled.div`
  padding: 40px;
`;

const Content = styled.div`

`;

const checkFirstVisit = () => {
  let cryptoDashData = localStorage.getItem('cryptoDash');
  if(!cryptoDashData) {
    return {
      firstVisit: true,
      page: 'settings'
    }
  }
  return {};
}

class App extends Component {
  state = {
    page: 'settings',
    ...checkFirstVisit()
  }
  componentDidMount = () => {
    this.fetchCoins();
  }
  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });

  }
  displayingDashboard = () => this.state.page === 'dashboard';
  displayingSettings = () => this.state.page === 'settings';
  firstVisitMessage = () => {
    if(this.state.firstVisit){
      return <div>Welcome to CyptoDash, please select your favourite coins to begin.</div>
    }
  }
  confirmFavourites = () => {
    localStorage.setItem('cryptoDash', 'shiva');
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    })
  }
  settingsContent = () => {
    return <div>
      {this.firstVisitMessage()}
      <div onClick={this.confirmFavourites}>
        Confirm Favourites
      </div>
    </div>
  }
  loadingContent = () => {
    if(!this.state.coinList) {
      return <div> Loading Coins </div>
    }
  }
  render() {
    return (
      <AppLayout>
        {AppBar.call(this)}
      {this.loadingContent() || <Content>
        {this.displayingSettings() && this.settingsContent()}
      </Content>}
      </AppLayout>
    );
  }
}

export default App;
