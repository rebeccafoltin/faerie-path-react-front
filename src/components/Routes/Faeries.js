import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

class Faeries extends Component {
  constructor (props) {
    super(props)

    this.state = {
      faeries: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/faeries`)
      .then(res => this.setState({ faeries: res.data.faeries }))
      .catch(console.error)
  }


  render () {
    const faeries = this.state.faeries.map(faerie => (
      <li key={faerie.id}>
        <Link to={`/faeries/${faerie._id}`}>{faerie.title}</Link>
      </li>
    ))

    return (
      <Layout>
        <h4>Faeries</h4>
        <ul>
          {faeries}
        </ul>
      </Layout>
    )
  }
}

export default Faeries