import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import AutomaticForm from 'react-automatic-form'

export class Signup extends Component {
  handleSubmit (formData) {
    console.log(formData)
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
      },
      {
        name: 'confirm password',
        type: 'password'
    }]
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <h1>Sign Up</h1>
            <AutomaticForm inputs={inputFields} callBack={this.handleSubmit.bind(this)}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
