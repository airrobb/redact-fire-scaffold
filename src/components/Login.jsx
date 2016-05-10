import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import AutomaticForm from 'react-automatic-form'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/login'

export class Login extends Component {
  componentWillMount () {
    console.log(this.props.user)
  }
  handleSubmit (formData) {
    this.props.userLogin(formData.email, formData.password)
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
            <h1>Login</h1>
            <AutomaticForm inputs={inputFields} callBack={this.handleSubmit.bind(this)} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  return {
    app: state.app
  }
}

export const LoginContainer = connect(mapStateToProps, actionCreators)(Login)
