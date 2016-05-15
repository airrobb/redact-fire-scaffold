import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap'

export class AccountDetails extends Component {

  handleSubmit (e) {
    e.preventDefault()
  }
  render () {
    const { formState } = this.props
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlId='name'>
          <ControlLabel>Name</ControlLabel>
          <FormControl type='text'
            placeholder='Add your name'
            value={formState.getIn(['name', 'value'])} />
        </FormGroup>
        <FormGroup controlId='location'>
          <ControlLabel>Location</ControlLabel>
          <FormControl type='text'
            placeholder='Add your location'
            value={formState.getIn(['location', 'value'])} />
        </FormGroup>
        <FormGroup controlId='description'>
          <ControlLabel>Description</ControlLabel>
          <FormControl type='text'
            placeholder='Add your description'
            value={formState.getIn(['description', 'value'])} />
        </FormGroup>
        <FormGroup>
          <Button bsStyle='success' type='submit'>
            Save
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

AccountDetails.propTypes = {
  formState: PropTypes.object.isRequired,
}
