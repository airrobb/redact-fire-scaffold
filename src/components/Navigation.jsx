import React, { Component } from 'react'
import { Link } from 'react-router'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
export class Navigation extends Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to={{ pathname: '/' }}>
              <a>Your App</a>
            </IndexLinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={{ pathname: '/signup' }}>
              <NavItem eventKey={1} href='#'>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/login' }}>
              <NavItem eventKey={2} href='#'>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
