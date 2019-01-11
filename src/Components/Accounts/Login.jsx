import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../utils/styles'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Button, IconButton, Paper, Typography } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

class Login extends Component {
  handleSubmit = () => {
    window.location.replace('/dashboard')
  }
  render() {
    const { classes } = this.props
    return <div className="homepage">
      <div className={classes.form}>
        <form >

          <div className={classes.login} >
            <Typography variant="h6" className={classes.user}>
              <IconButton className={classes.icon} variant="h6">
                <AccountCircle />
                </IconButton>
                User Login
             
            </Typography>
            {/* <br /> */}
            <Paper className={classes.paper}>
              <div>
                <TextField
                  id="username"
                  color="inherit"
                  label="Username"
                  type="text"
                  // margin="normal"
                  className={classes.textField}
                />
              </div>
              <div>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  // margin="normal"
                  className={classes.textField}
                />
              </div>
              <br />
              <div>
                <Button variant="contained" color="primary" className={classes.submitForm} onClick={this.handleSubmit}>
                  Login
              </Button>
              </div>
            </Paper>
          </div>


        </form>

      </div>
    </div>
  }

}
Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Login)