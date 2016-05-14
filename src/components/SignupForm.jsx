import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

export class SignupForm extends Component {
  handleChange (e) {
    this.props.validateSignup(e.target.id ,e.target.value)
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log(this.props.formState.get('valid'))
  }
  render () {
    const { formState } = this.props
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlId="email" validationState={formState.getIn(['email', 'validation']) ? 'success' : 'error'}>
          <ControlLabel>Email</ControlLabel>
          <FormControl value={formState.getIn(['email', 'value'])}  type="email" placeholder="Enter email" onChange={this.handleChange.bind(this)}/>
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="password1" validationState={formState.getIn(['password1', 'validation']) ? 'success' : 'error'}>
          <ControlLabel>Password</ControlLabel>
          <FormControl value={formState.getIn(['password1', 'value'])} type="password" placeholder="Must be 8 - 16 characters long" onChange={this.handleChange.bind(this)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="password2" validationState={formState.getIn(['password2', 'validation']) ? 'success' : 'error'}>
          <ControlLabel>Re-enter Password</ControlLabel>
          <FormControl value={formState.getIn(['password2', 'value'])} type="password" placeholder="Must match above" onChange={this.handleChange.bind(this)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <Button type="submit">
            Sign Up
          </Button>
        </FormGroup>
      </Form>
    )
  }
}
