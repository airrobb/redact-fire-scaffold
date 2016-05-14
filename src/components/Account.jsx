import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export class Account extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <h1>Account</h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}

Account.propTypes = {
  userInfo: PropTypes.object.isRequired
}
