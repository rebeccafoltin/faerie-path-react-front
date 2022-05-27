/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */

import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

// API request
import { showFaerie, deleteFaerie } from '../../api/faeries'

import Button from 'react-bootstrap/Button'

class ShowFaerie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using null as a starting value will help us manage the "loading state" of our ShowFaerie component
      faerie: null
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

  // SHOW FAERIE
    showFaerie(match.params.id, user)
      .then(res => this.setState({ faerie: res.data.faeries }))
      .then(() => msgAlert({
        heading: 'Show faerie success',
        message: 'Check out the faerie',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Show faerie failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      }))
  }

  // DELETE FAERIE
    handleDelete = (event) => {
      const { match, user, msgAlert, history } = this.props
      deleteFaerie(match.params.id, user)
      // Redirect to the list of faeries
        .then(() => history.push('/faeries'))
        .then(() => msgAlert({ heading: 'Delete faerie successfully', message: 'Faerie is no more', variant: 'success' }))
        .catch(err => msgAlert({ heading: 'Delete faerie failed :(', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
    }

    render () {
      if (this.state.faerie === null) {
        return 'Loading...'
      }

      // Get the owner (a user id) from the faerie state
      const { faeriename, power, owner } = this.state.faerie
      const { history, match, user } = this.props

      return (
        <>
          <h3>Show One Faerie Page</h3>
          <h5>This faerie is named {faeriename}</h5>
          <p>This faerie has the power: {power}</p>
          {/* Compare the signed in user's ID against the owner of this faerie */}
          {user._id === owner && (
            <>
              <Button onClick={this.handleDelete}>Delete This Faerie</Button>
              {/* Button with a Link inside should work but is ugly. Better way below. */}
              <Button><Link to={`/faeries/${match.params.id}/edit`}>Update Faerie</Link></Button>

              {/* Provide the Button a `onClick` handler & use the history object to redirect the user */}
              <Button onClick={() => history.push(`/faeries/${match.params.id}/edit`)}>
                            Update Faerie
              </Button>
            </>
          )}
        </>
      )
    }
}

export default withRouter(ShowFaerie)
