/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { updateFaerie, showFaerie } from '../../api/faeries'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateFaerie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using null as a starting value will help us manage the "loading state" of our Updatefaerie component
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
      .then((res) =>
        this.setState({
          faeriename: res.data.faerie.faeriename,
          power: res.data.faerie.power
    })
  )
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

	  handleChange = (event) =>
	    this.setState({
	      [event.target.name]: event.target.value
	    })

    handleSubmit = (event) => {
      event.preventDefault()

      const { user, msgAlert, history, match } = this.props

      updateFaerie(this.state, match.params.id, user)
        .then(res => history.push('/update-faerie/' + match.params.id))
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
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='name'>
                <Form.Label>Faerie Name</Form.Label>
                  <Form.Control
                    required
                    name='faeriename'
                    value={this.state.faeriename}
                    placeholder='Faerie Name'
                    onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Group controlId='power'>
                <Form.Label>Faerie Power</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    required
                    name='power'
                    value={this.state.power}
                    placeholder='Faerie Power'
                  />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
                  </>
        )
    }
}

export default withRouter(UpdateFaerie)
