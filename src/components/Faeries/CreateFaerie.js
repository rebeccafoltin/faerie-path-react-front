/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import FaerieForm from '../Shared/FaerieForm'

import { createFaerie } from '../../api/faeries'

class CreateFaerie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      faeriename: '',
      power: ''
    }
  }

    handleChange = (event) => {
      // The event.target of this event will be an input element
      // Which will have a `name` attribute (key in the state) & a `value` (what the user typed)
      this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
      event.preventDefault()

      const { user, msgAlert, history } = this.props

      createFaerie(this.state, user)
        .then(res => history.push('/faerie/' + res.data.faerie._id))
        .then(() => msgAlert({ heading: 'Faerie Created!', message: 'Nice work, go check out your faerie.', variant: 'success' }))
        .catch(err => {
          msgAlert({
            heading: 'Faerie creation failed :(',
            message: 'Something went wrong: ' + err.message,
            variant: 'danger'
          })
        })
    }

    render () {
      return (
        <>
          <h3>Create Faerie</h3>
          <FaerieForm
            faerie={this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </>
      )
    }
}

export default withRouter(CreateFaerie)
