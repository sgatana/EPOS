import React, { Component } from 'react'
import styles from '../utils/styles'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, IconButton, CssBaseline, Divider, Hidden, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import MainMenu from './Nav/mainMenu'
import Content from './Content'

const products = [
  {
    id: '1',
    name: 'rubber shoes',
    price: 5000,
    description: 'rubber shoes fron china'
  },
  {
    id: '2',
    name: 'official shoes',
    price: 5000,
    description: 'official shoes fron Kenya'
  }
]
class Main extends Component {
  constructor() {
    super()
    this.state = {
      mobileOpen: false,
      openReportsNav: false,
      openSettingsNav: false,
      products: ''
    }
  }
  loadProducts = () => {
    this.setState({
      products: products,
    })
    console.log(this.state.products)
  }
  handleOpenNav = () => {
    this.setState(state => ({
      openReportsNav: !state.openReportsNav
    }))
  }
  handleOpenSettingsNav = () => {
    this.setState(state => ({
      openSettingsNav: !state.openSettingsNav
    }))
  }
  handlDrawerToggle = () => {
    this.setState(() => ({
      mobileOpen: !this.state.mobileOpen
    }))
  }

  render() {
    const { classes, theme } = this.props
    const { openReportsNav, openSettingsNav, products } = this.state
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
              <MainMenu classes={classes} openSettingsNav={openSettingsNav} openReportsNav={openReportsNav} handleReportsMenu={this.handleOpenNav} handleSettingsMenu={this.handleOpenSettingsNav} loadProducts={this.loadProducts} />
            </Drawer>
          </Hidden>
        </nav>
        <Content products={products} />
      </div>
    )
  }
}
Main.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles, { withTheme: true })(Main)