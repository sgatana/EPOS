import React from 'react'
import styles from '../utils/styles'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const Main = ({ products, classes }) => {
  return <div>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div>
        {
          products
          ? products.map(product => {
            return <div key={product.id}>
              {product.name}
            </div>
          })
          : <Typography variant="body2">No product available</Typography>
        }

      </div>
    </main>
  </div>
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Main)