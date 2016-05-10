import React, { Component, PropTypes } from 'react'
import { NavigationContainer } from './Navigation'

export class App extends Component {
  render () {
    return (
      <div>
        <NavigationContainer />
        {this.props.children}
      </div>

    )
  }
}
