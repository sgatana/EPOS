import React from 'react'
import styles from '../../utils/styles'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@material-ui/core'
import { ExpandLess, RemoveCircle, ExpandMore, ViewList, AddCircle, AccountCircle, AddShoppingCart, Settings, Timeline, TrendingDown, TrendingUp } from '@material-ui/icons'

class MainMenu extends React.Component {
  state = {
    open: false,
    modalOpen: false
  }
  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }))
  }
  handleModalOpen = () => {
    this.setState(state => ({
      modalOpen: !state.modalOpen
    }))
  }
  render() {
    const { classes } = this.props
    return <div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText primary="Add Product" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Sell" />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <Timeline />
          </ListItemIcon>
          <ListItemText primary="Reports" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List className={classes.nested}>
            <ListItem button>
              <ListItemIcon >
                <TrendingUp />
              </ListItemIcon>
              <ListItemText inset primary="Sales" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <TrendingDown />
              </ListItemIcon>
              <ListItemText inset primary="Purchases" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleModalOpen}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText inset primary="Settings" />
          {this.state.modalOpen ? <ExpandLess /> : <ExpandMore />}

        </ListItem>
        <Collapse in={this.state.modalOpen} timeout="auto" unmountOnExit>
          <List className={classes.nested}>
            <ListItem button>
              <ListItemIcon >
                <AccountCircle />
              </ListItemIcon>
              <ListItemText inset primary="Add User" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <RemoveCircle />
              </ListItemIcon>
              <ListItemText inset primary="Deactivate User" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  }

}
MainMenu.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(MainMenu)