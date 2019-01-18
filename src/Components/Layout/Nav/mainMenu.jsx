import React from 'react'
import styles from '../../utils/styles'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@material-ui/core'
import { ExpandLess, RemoveCircle, ExpandMore, ViewList, AddCircle, AccountCircle, AddShoppingCart, Settings, Timeline, TrendingDown, TrendingUp } from '@material-ui/icons'


  const MainMenu = ({loadProducts, classes, openReportsNav, openSettingsNav, handleSettingsMenu, handleReportsMenu }) => {
    return <div>
      <List>
        <ListItem button onClick={() =>loadProducts()}>
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
        <ListItem button onClick = {() => handleReportsMenu()}>
          <ListItemIcon>
            <Timeline />
          </ListItemIcon>
          <ListItemText primary="Reports" />
          {openReportsNav? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse  in={openReportsNav} timeout="auto" unmountOnExit>
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
        <ListItem button onClick = {() => handleSettingsMenu()}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText inset primary="Settings" />
          {openSettingsNav ? <ExpandLess /> : <ExpandMore />}

        </ListItem>
        <Collapse in={openSettingsNav} timeout="auto" unmountOnExit>
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

// }
MainMenu.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(MainMenu)