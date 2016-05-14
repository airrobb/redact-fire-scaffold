import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap'

export class LoginForm extends Component {
  handleChange (e) {
    this.props.validateLogin(e.target.id ,e.target.value)
  }
  handleSubmit (e) {
    e.preventDefault()
  }
  setValidation (state) {
    if (state === undefined) {
      return ''
    } else {
      return state ? 'success' : 'error'
    }
  }  render () {
    const { formState } = this.props
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlId="email"
          validationState={this.setValidation(formState.getIn(['email', 'validation']))}>
          <FormControl value={formState.getIn(['email', 'value'])}
            type="email"
            placeholder="Enter your email"
            onChange={this.handleChange.bind(this)}/>
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="password"
          validationState={this.setValidation(formState.getIn(['password', 'validation']))}>
          <ControlLabel>Password</ControlLabel>
          <FormControl value={formState.getIn(['password', 'value'])}
            type="password"
            placeholder="Enter your password"
            onChange={this.handleChange.bind(this)} />
          <FormControl.Feedback />
        </FormGroup>
      </Form>
    )
  }
}
