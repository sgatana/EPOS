import React, { Component } from 'react'
import styles from '../utils/styles'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, IconButton, CssBaseline, Divider, Hidden, Drawer} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import MainMenu from './Nav/mainMenu'
import Content from './Content'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      mobileOpen: false,
    }
  }

  handlDrawerToggle = () => {
    this.setState(() => ({
      mobileOpen: !this.state.mobileOpen
    }))
  }

  render() {
    const { classes, theme } = this.props
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar className={classes.appBar} color="default">
          <Toolbar>
            <IconButton
              color="primary"
              className={classes.menuButton}
              onClick={this.handlDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color="primary" variant="h6">
              Erams POS
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handlDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <MainMenu />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation>
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.toolbar} />
              <Divider />
              <MainMenu />
            </Drawer>
          </Hidden>
        </nav>
        <Content />
      </div>
    )
  }
}
Main.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles, { withTheme: true })(Main)