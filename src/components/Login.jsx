import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/login'
import { LoginForm } from './LoginForm'

export class Login extends Component {
  handleSubmit (email, password) {
    this.props.userLogin(email, password)
  }
  render () {
    const { formState, validateLogin } = this.props
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <h1>Login</h1>
            <LoginForm
              login={this.handleSubmit.bind(this)}
              formState={formState}
              validateLogin={validateLogin.bind(this)}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  return {
    formState: state.app.get('loginForm')
  }
}

Login.propTypes = {
  formState: PropTypes.object.isRequired,
  userLogin: PropTypes.func.isRequired
}

export const LoginContainer = connect(mapStateToProps, actionCreators)(Login)
