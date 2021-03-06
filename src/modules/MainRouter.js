import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import HomePage from '../pages/HomePage';
import TopicsPage from '../pages/TopicsPage';
import AssignmentsPage from '../pages/AssignmentsPage';
import GoalsPage from '../pages/GoalsPage';
import LivePage from '../pages/LivePage';

export default class MainRouter extends Component {
  constructor() {
    super();
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 304,
      }
    }
  }

  getChildContext () {
    return {
      navOpenState: this.state.navOpenState,
    };
  }

  appWithPersistentNav = () => (props) => (
    <App
      onNavResize={this.onNavResize}
      {...props}
    />
  )

  onNavResize = (navOpenState) => {
    this.setState({
      navOpenState,
    });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route component={this.appWithPersistentNav()}>
          <Route path="/" component={HomePage} />
          <Route path="/live" component={LivePage} />
          <Route path="/topics" component={TopicsPage} />
          <Route path="/assignments" component={AssignmentsPage} />
          <Route path="/goals" component={GoalsPage} />
        </Route>
      </Router>
    );
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object,
}
