import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap'

export class ChangeEmail extends Component {
  handleChange (e) {
    this.props.validateEmailChange(e.target.id, e.target.value)
  }
  handleSubmit (e) {
    e.preventDefault()
  }
  setValidation () {
    return ''
  }
  render () {
    const { formState } = this.props
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlId='email1'
          validationState={this.setValidation(formState.getIn(['email1', 'validation']))}>
          <ControlLabel>New Email</ControlLabel>
          <FormControl value={formState.getIn(['email1', 'value'])}
            type='email'
            placeholder='Enter your email'
            onChange={this.handleChange.bind(this)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId='email2'
          validationState={this.setValidation(formState.getIn(['email2', 'validation']))}>
          <ControlLabel>Confirm Email</ControlLabel>
          <FormControl value={formState.getIn(['email2', 'value'])}
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
            Change
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

ChangeEmail.propTypes = {
  formState: PropTypes.object.isRequired,
}
