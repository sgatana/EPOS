import React, { Fragment } from 'react'
import Content from './Layout/Content';
import Header from './Layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Products } from './Layout/Products';
import { Sidebar } from './Layout/Sidebar';
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
    }
  }
  handleToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }
  closeSidebar = () => {
    this.setState({
      toggle: false
    })
  }
  render() {
    let className;
    if (this.state.toggle) {
      className = 'toggled'
    }
    return (
      <div id="wrapper" className={className} >
        <Router>
          <Fragment>
            <Header toggle={this.handleToggle} />
            <Sidebar />
            <div onClick={this.closeSidebar}>
              <Route exact path="/" component={Content} />
              <Route path="/products" component={Products} />
            </div>

          </Fragment>
        </Router>
      </div>
    )
  }
}