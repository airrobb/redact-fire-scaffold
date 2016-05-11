import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import AutomaticForm from 'react-automatic-form'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/signup'

export class Signup extends Component {
  handleSubmit (formData) {
    this.props.signUp(formData.email, formData.password)
  }
  render () {
    const inputFields = [
      {
        name: 'email',
        type: 'email'
      },
      {
        name: 'password',
        type: 'password'
      }]
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <h1>Sign Up</h1>
            <AutomaticForm
              inputs={inputFields}
              callBack={this.handleSubmit.bind(this)} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.app.get('user')
  }
}

Signup.propTypes = {
  user: PropTypes.object,
  signUp: PropTypes.func.isRequired
}

export const SignupContainer = connect(mapStateToProps, actionCreators)(Signup)
