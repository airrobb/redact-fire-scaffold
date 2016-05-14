import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap'

export class SignupForm extends Component {
  handleChange (e) {
    this.props.validateSignup(e.target.id ,e.target.value)
  }
  handleSubmit (e) {
    e.preventDefault()
    const { formState, signUp, setError } = this.props
    formState.get('valid')
    ? signUp(formState.getIn(['email', 'value']), formState.getIn(['password1', 'value']))
    : setError()
  }
  setValidation (state) {
    if (state === undefined) {
      return ''
    } else {
      return state ? 'success' : 'error'
    }
  }
  render () {
    const { formState } = this.props
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlId="email"
          validationState={this.setValidation(formState.getIn(['email', 'validation']))}>
          <ControlLabel>Email</ControlLabel>
          <FormControl value={formState.getIn(['email', 'value'])}
            type="email"
            placeholder="Enter email"
            onChange={this.handleChange.bind(this)}/>
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="password1"
          validationState={this.setValidation(formState.getIn(['password1', 'validation']))}>
          <ControlLabel>Password</ControlLabel>
          <FormControl value={formState.getIn(['password1', 'value'])}
            type="password"
            placeholder="Must be 8 - 16 characters long"
            onChange={this.handleChange.bind(this)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="password2"
          validationState={this.setValidation(formState.getIn(['password2', 'validation']))}>
          <ControlLabel>Re-enter Password</ControlLabel>
          <FormControl value={formState.getIn(['password2', 'value'])}
            type="password"
            placeholder="Must match above"
            onChange={this.handleChange.bind(this)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <Button bsStyle="success" type="submit">
            Sign Up
          </Button>
        </FormGroup>
        <Alert bsStyle={formState.getIn(['message', 'type'])} style={{display: formState.getIn(['message', 'active']) ? 'block' : 'none'}}>
         <h4>{formState.getIn(['message', 'content', 'headline'])}</h4>
         <p>{formState.getIn(['message', 'content', 'message'])}</p>
       </Alert>
      </Form>
    )
  }
}
