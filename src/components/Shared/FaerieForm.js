import React from 'react'
import { Link } from 'react-router-dom'
import CreateFaerie from './components/Faeries/CreateFaerie'

const FaerieForm = ({ faerie, handleSubmit, handleChange, cancelPath}) => (
  <form onSubmit={handleSubmit}>
    <label> Faerie Name </label>
    <input placeholder="Tinkerbell"
    value={faerie.faeriename}
    name="faeriename"
    onChange={handleChange}
    />
    
    <label>Faerie Power</label>
    <input
      placeholder="John Doe"
      value={faerie.power}
      name="power"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default FaerieForm



// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

// const FaerieForm = ({ faerie, handleSubmit, handleChange }) => (
//   <Form onSubmit={handleSubmit}>
//     <Form.Group controlId='name'>
//       <Form.Label>Faerie Name</Form.Label>
//       <Form.Control
//         required
//         name='faeriename'
//         value={faerie.faeriename}
//         placeholder='Faerie Name'
//         onChange={handleChange}
//       />
//     </Form.Group>
//     <Form.Group controlId='power'>
//       <Form.Label>Faerie Power</Form.Label>
//       <Form.Control
//         onChange={handleChange}
//         required
//         name='power'
//         value={faerie.power}
//         placeholder='Faerie Power'
//       />
//     </Form.Group>
//     <Button type="submit">Submit</Button>
//   </Form>

// )

// export default FaerieForm