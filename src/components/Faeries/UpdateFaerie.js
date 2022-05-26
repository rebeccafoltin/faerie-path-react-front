import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { updateFaerie, showFaerie } from '../../api/faeries'
import FaerieForm from '../Shared/MovieForm'

class UpdateFaerie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using null as a starting value will help us manage the "loading state" of our UpdateMovie component
      faerie: { // this should not be null
        faeriename: '', // must provide starting values for the form inputs
        power: ''
      }
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showFaerie(match.params.id, user)
      .then(res => this.setState({ faerie: res.data.faerie }))
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

    handleChange = (event) => {
      // because `this.state.faerie` is an object with multiple keys, we have to do some fancy updating
      const userInput = { [event.target.name]: event.target.value }
      this.setState(currState => {
        // "Spread" out current faerie state key/value pairs, then add the new one at the end
        // this will override the old key/value pair in the state but leave the others untouched
        return { faerie: { ...currState.faerie, ...userInput } }
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()

      const { user, msgAlert, history, match } = this.props

      updateFaerie(this.state.faerie, match.params.id, user)
        .then(res => history.push('/faeries/' + match.params.id))
        .then(() => msgAlert({ heading: 'Faerie Updated!', message: 'Nice work, go check out your faerie.', variant: 'success' }))
        .catch(err => {
          msgAlert({
            heading: 'Faerie update failed :(',
            message: 'Something went wrong: ' + err.message,
            variant: 'danger'
          })
        })
    }

    render () {
      return (
        <>
          <h3>Update Faerie Page</h3>
          <FaerieForm
            faerie={this.state.faerie}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </>
      )
    }
}

export default withRouter(UpdateFaerie)