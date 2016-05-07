import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export class Login extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <h1>Login</h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}
