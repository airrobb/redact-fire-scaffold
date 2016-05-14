import React, { Component, PropTypes } from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

export class SignupForm extends Component {
  render () {
    return (
      <form>
        <FormGroup controlId="formControlsEmail" validationState="success">
          <ControlLabel>Email</ControlLabel>
          <FormControl ref="email" type="email" placeholder="Enter email" />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="formControlsPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl ref="password1" type="password" placeholder="Must me 8 - 16 characters long" />
        </FormGroup>
        <FormGroup controlId="formControlsPassword2">
          <ControlLabel>Re-enter Password</ControlLabel>
          <FormControl ref="password2" type="password" placeholder="Must match above" />
        </FormGroup>
      </form>
    )
  }
}
