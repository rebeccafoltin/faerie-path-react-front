/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { showFaerie, deleteFaerie } from '../../api/faeries'

class ShowFaerie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      faerie: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showFaerie(match.params.id, user)
      .then((res) => {
        this.setState({ faerie: res.data.faerie })
        })
      .then(() => {
        msgAlert({
          heading: 'faeries shown',
          message: 'look at those pretty faeries!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'faeries not shown',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

	handleDelete = () => {
	  const { match, user, msgAlert, history } = this.props

	  deleteFaerie(match.params.id, user)
	    .then(() => history.push('/create-faerie'))
	    .then(() => {
	      msgAlert({
	        heading: 'Delete success',
	        message: 'Successfully deleted',
	        variant: 'success'
	      })
	    })
	    .catch((error) => {
	      msgAlert({
	        heading: 'Delete fail',
	        message: 'Delete error: ' + error.message,
	        variant: 'danger'
	      })
	    })
	}

	render () {
	  if (this.state.faerie === null) {
	    return 'Loading...'
	  }

	  const { faeriename, power, owner } = this.state.faerie
	  const { user } = this.props

	  return (
	    <div>
	      <>
	        <Card border='light' style={{ width: '30rem' }}>
	          <Card.Header>
	            {faeriename}&apos;s Faeries
	          </Card.Header>
	          <Card.Body>
	            <Card.Title>
	              <p>Hello {faeriename}!</p>
	            </Card.Title>
	            <Card.Text>
	              <p>Faerie Power: {power}</p>
	            </Card.Text>
	            {user._id === owner && (
	              <>
	                <Button
	                  variant='outline-dark'
	                  onClick={this.handleDelete}>
										Delete
	                </Button>
	              </>
	            )}
	          </Card.Body>
	        </Card>
	      </>
	    </div>
	  )
	}
}

export default withRouter(ShowFaerie)
