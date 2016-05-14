import React, { Component, PropTypes } from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

export class SignupForm extends Component {
  handleChange (e) {
    this.props.validateSignup(e.target.id ,e.target.value)
  }
  render () {
    const { formState } = this.props
    return (
      <form>
        <FormGroup controlId="email" validationState={formState.getIn(['email', 'validation'])}>
          <ControlLabel>Email</ControlLabel>
          <FormControl value={formState.getIn(['email', 'value'])}  type="email" placeholder="Enter email" onChange={this.handleChange.bind(this)}/>
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="password1" validationState={formState.getIn(['password1', 'validation'])}>
          <ControlLabel>Password</ControlLabel>
          <FormControl value={formState.getIn(['password1', 'value'])} type="password" placeholder="Must be 8 - 16 characters long" onChange={this.handleChange.bind(this)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="password2" validationState={formState.getIn(['password2', 'validation'])}>
          <ControlLabel>Re-enter Password</ControlLabel>
          <FormControl value={formState.getIn(['password2', 'value'])} type="password" placeholder="Must match above" onChange={this.handleChange.bind(this)} />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    )
  }
}
