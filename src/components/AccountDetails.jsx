import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap'

export class AccountDetails extends Component {

  handleSubmit (e) {
    e.preventDefault()
    console.log('hi')
  }
  render () {
    const { formState } = this.props
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlId='name'>
          <FormControl type='text'
            placeholder='Add your name'
            value={formState.getIn(['name', 'value'])} />
        </FormGroup>
        <FormGroup controlId='location'>
          <FormControl type='text'
            placeholder='Add your location'
            value={formState.getIn(['location', 'value'])} />
        </FormGroup>
        <FormGroup controlId='description'>
          <FormControl type='text'
            placeholder='Add your description'
            value={formState.getIn(['description', 'value'])} />
        </FormGroup>
        <FormGroup>
          <Button bsStyle='success' type='submit'>
            Save
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

AccountDetails.propTypes = {
  formState: PropTypes.object.isRequired,
}
