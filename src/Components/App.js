import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Layout/Main'
import Login from './Accounts/Login'
import { withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  main: theme.mixins.toolbar,
  drawerPaper: {
    width: 240,
  },
})
class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Main} />
          </div>
        </Router>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles, { withTheme: true })(App);
