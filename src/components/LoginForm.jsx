import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap'

export class LoginForm extends Component {
  handleChange (e) {
    this.props.validateLogin(e.target.id, e.target.value)
  }
  handleSubmit (e) {
    e.preventDefault()
    const { formState, login, setError } = this.props
    formState.get('valid')
    ? login(formState.getIn(['email', 'value']), formState.getIn(['password', 'value']))
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
        <FormGroup controlId='email'
          validationState={this.setValidation(formState.getIn(['email', 'validation']))}>
          <FormControl value={formState.getIn(['email', 'value'])}
            type='email'
            placeholder='Enter your email'
            onChange={this.handleChange.bind(this)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId='password'
          validationState={this.setValidation(formState.getIn(['password', 'validation']))}>
          <ControlLabel>Password</ControlLabel>
          <FormControl value={formState.getIn(['password', 'value'])}
            type='password'
            placeholder='Enter your password'
            onChange={this.handleChange.bind(this)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <Button bsStyle='success' type='submit'>
            Login
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

LoginForm.propTypes = {
  formState: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  validateLogin: PropTypes.func.isRequired
}
