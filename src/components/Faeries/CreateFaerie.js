/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createFaerie } from '../../api/faeries'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
      console.log('#########', this.state.faerie)
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
          <h3>Create Faerie Page</h3>
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

export default withRouter(CreateFaerie)
