import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../Shared/Layout'

class Faerie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      faerie: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/faeries/${this.props.match.params.id}`)
      .then(res => this.setState({ faerie: res.data.faerie }))
      .catch(console.error)
  }

  /*
  Async/Await version:
  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/faeries/${this.props.match.params.id}`)
      this.setState({ faerie: response.data.faerie })
    } catch (err) {
      console.error(err)
    }
  }
  */

  destroy = () => {
    axios({
      url: `${apiUrl}/faeries/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }
  /*
  async destroy = () => {
    try {
      const response = await axios({
        url: `${apiUrl}/faeries/${this.props.match.params.id}`,
        method: 'DELETE'
      })
      this.setState({ deleted: true })
    } catch (err) {
      console.error(err)
    }
  }
  */

  render () {
    const { faerie, deleted } = this.state

    if (!faerie) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={
        { pathname: '/', state: { msg: 'Faerie succesfully deleted!' } }
      } />
    }

    return (
      <Layout>
        <h4>Faerie name {faerie.faeriename} </h4>
        <p>Faerie power {faerie.power} </p>
        <button onClick={this.destroy}> Delete Faerie</button>
        <Link to={`/faeries/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/faeries">Back to all faeries</Link>
      </Layout>
    )
  }
}

export default Faerie