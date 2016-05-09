import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export class Login extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>Login</h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}
