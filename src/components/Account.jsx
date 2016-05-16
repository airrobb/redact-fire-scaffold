import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import { AccountDetails } from './AccountDetails'
import { ChangeEmail } from './ChangeEmail'
import * as actionCreators from '../action-creators/account'

export class Account extends Component {
  render () {
    const { updateDetails, updateDetailsChange, changeEmail, validateChangeEmail, changeEmailError } = this.props
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>Account</h1>
          </Col>
          <Col xs={12} md={6}>
            <h4>Your Details</h4>
            <AccountDetails formState={this.props.account.get('detailsForm')}
              updateDetails={updateDetails}
              updateDetailsChange={updateDetailsChange} />
            <h4>Change Email</h4>
            <ChangeEmail formState={this.props.account.get('changeEmailForm')}
              validateChangeEmail={validateChangeEmail}
              setError={changeEmailError}
              changeEmail={changeEmail}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.app.get('user'),
    account: state.app.get('account')
  }
}

Account.propTypes = {
  user: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired
}

export const AccountContainer = connect(mapStateToProps, actionCreators)(Account)
