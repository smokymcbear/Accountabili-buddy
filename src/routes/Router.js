import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Login from '../containers/Login';
import Register from '../containers/Register';
import Profile from '../containers/Profile';
import Camera from '../containers/Camera';
import Ducky from '../containers/Ducky';
import TeamList from '../containers/TeamList';
import Slider from './Slider';

export const DashboardNavigator = TabNavigator({
  Profile: { screen: Profile },
  Camera: { screen: Camera },
  Ducky: { screen: Ducky }
});

export const LoginNavigator = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Teams: { screen: TeamList },
  Slider: { screen: Slider },
  Profile: { screen: Profile }
});

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export class Navigation extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <LoginNavigator />
    }

    return <DashboardNavigator />
  }
}

export default connect(mapStateToProps)(Navigation);
