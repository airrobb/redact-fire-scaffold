import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap'

export class AccountDetails extends Component {
  handleChange (e) {
    this.props.validateLogin(e.target.id, e.target.value)
  }
  handleSubmit (e) {
    e.preventDefault()

  }
  render () {
    const { formState } = this.props
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>

      </Form>
    )
  }
}

AccountDetails.propTypes = {
  formState: PropTypes.object.isRequired,
}
