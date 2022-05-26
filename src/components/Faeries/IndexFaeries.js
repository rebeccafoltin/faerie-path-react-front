// Reminder: Don't forget to render this component in a route (or AuthenticatedRoute) in App.js

// Imports:
// - React, Component
import React, { Component } from 'react'
// - Link
import { Link } from 'react-router-dom'
// - indexMovies (or something) (api function)
import { indexFaeries } from '../../api/faeries'
// - optional messages

// Create a new class inherits from Component
class IndexFaeries extends Component {
  // - constructor (set up initial state)
  constructor (props) {
    super(props)

    this.state = {
      // movies: []
      faeries: null
    }
  }

  // - lifecycle method (right away when this component renders, make a request for all the movies & put em in state)
  componentDidMount () {
    const { user, msgAlert } = this.props
    indexFaeries(user)
      .then(res => this.setState({ faeries: res.data.faeries }))
      .then(() => msgAlert({ heading: 'Index success', message: 'Here\'s the faeries', variant: 'success' }))
      .catch(err => msgAlert({ heading: 'Index failed :(', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  // - render - display the movies in the state (optionally: loading message)
  render () {
    const { faeries } = this.state
    // This is what prevents the "cannot read property map of undefined" or other similar errors because on the first render, `movies` state will be `null`
    if (faeries === null) {
      return 'Loading...'
    }

    let faerieJsx
    if (faeries.length === 0) {
      faerieJsx = 'No faeries, go create some'
    } else {
      // I want faeriesJsx to be a bunch of li or Link or something with all my movies info in them
      // .map gives us back a new array that we can display
      faeriesJsx = faeries.map(faerie => (
        <li key={faerie._id}>
          <Link to={`/faeries/${faerie._id}`}>{faerie.title}</Link>
        </li>
      ))
    }

    return (
      <>
        <h3>All The Faeries:</h3>
        {faerieJsx}
      </>
    )
  }
}

export default IndexFaeries
// export - don't forget!