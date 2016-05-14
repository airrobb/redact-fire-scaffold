import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { SignupForm } from './SignupForm'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/signup'

export class Signup extends Component {
  handleSubmit (email, password) {
    this.props.signUp(email, password)
  }
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <h1>Sign Up</h1>
            <SignupForm
              signUp={this.handleSubmit.bind(this)}
              validateSignup={this.props.validateSignup.bind(this)}
              formState={this.props.formState}
              setError={this.props.signUpError} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.app.get('user'),
    formState: state.app.get('signUpForm')
  }
}

Signup.propTypes = {
  user: PropTypes.object,
  signUp: PropTypes.func.isRequired,
  validateSignup: PropTypes.func.isRequired
}

export const SignupContainer = connect(mapStateToProps, actionCreators)(Signup)
