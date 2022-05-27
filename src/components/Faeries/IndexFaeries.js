/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
// Reminder: Don't forget to render this component in a route (or AuthenticatedRoute) in App.js

// Imports:
// - React, Component
import React, { Component } from 'react'
// - Link
import { Link } from 'react-router-dom'
// - indexMovies (or something) (api function)
import { indexFaeries } from '../../api/faeries'

class IndexFaeries extends Component {
  constructor (props) {
    super(props)

    this.state = {
      faeries: []
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    indexFaeries(user)
      .then(res => this.setState({ faeries: res.data.faerie }))
      .then(() => msgAlert({ heading: 'Index success', message: 'Here\'s the faeries', variant: 'success' }))
      .catch(err => msgAlert({ heading: 'Index failed :(', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  render () {
    const { faeries } = this.state
    if (faeries === null) {
      return 'Loading...'
    }

    let faerieJsx
    if (faeries.length === 0) {
      faerieJsx = 'No faeries, go create some'
    } else {
      faerieJsx = faeries.map(faerie => (
        <li key={faerie._id}>
          <Link to={`/faerie/${faerie._id}`}>{faerie.faeriename}</Link>
        </li>
      ))
    }

    return (
      <>
        <h3>All The Faeries:</h3>
        <ul>{faerieJsx}</ul>
      </>
    )
  }
}

export default IndexFaeries
