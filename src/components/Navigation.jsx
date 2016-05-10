import React, { Component, PropTypes } from 'react'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/navigation'

export class Navigation extends Component {
  handleLogout (e) {
    e.preventDefault()
    this.props.userLogout()
  }
  render () {
    console.log(this.props.user)
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to={{ pathname: '/' }}>
              <a>Your App</a>
            </IndexLinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            {this.props.user
              ? <LoggedIn
                user={this.props.user}
                logout={this.handleLogout.bind(this)} />
              : <LoggedOut />}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
const LoggedOut = (props) =>
  <Nav pullRight>
    <LinkContainer to={{ pathname: '/signup' }}>
      <NavItem eventKey={1} href='#'>Signup</NavItem>
    </LinkContainer>
    <LinkContainer to={{ pathname: '/login' }}>
      <NavItem eventKey={2} href='#'>Login</NavItem>
    </LinkContainer>
  </Nav>

const LoggedIn = (props) =>
  <Nav pullRight>
    <NavDropdown eventKey={3} title={props.user} id='user-navigation'>
      <LinkContainer to={{ pathname: '/account' }}>
        <MenuItem eventKey={3.1}>Account</MenuItem>
      </LinkContainer>
      <MenuItem divider />
      <MenuItem onClick={props.logout} eventKey={3.3}>Logout</MenuItem>
    </NavDropdown>
  </Nav>

function mapStateToProps (state) {
  return {
    user: state.app.get('user')
  }
}

Navigation.propTypes = {
  user: PropTypes.array.isRequired,
  userLogout: PropTypes.func.isRequired
}

LoggedIn.propTypes = {
  user: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired
}

export const NavigationContainer = connect(mapStateToProps, actionCreators)(Navigation)
