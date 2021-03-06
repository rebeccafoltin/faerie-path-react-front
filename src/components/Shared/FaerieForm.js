import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// attach functions to buttons

const FaerieForm = ({ faerie, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='name'>
      <Form.Label>Faerie Name</Form.Label>
      <Form.Control
        required
        name='faeriename'
        value={faerie.faeriename}
        placeholder='Faerie Name'
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId='power'>
      <Form.Label>Faerie Power</Form.Label>
      <Form.Control
        onChange={handleChange}
        required
        name='power'
        value={faerie.power}
        placeholder='Faerie Power'
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>

)

export default FaerieForm
