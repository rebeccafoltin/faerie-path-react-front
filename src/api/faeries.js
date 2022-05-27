/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
// apiUrl will be either the production or development url defined
// in the apiConfig.js file
import apiUrl from '../apiConfig'
import axios from 'axios'

// Create Faerie Request
// assume that `data` is an object with `title` and `director`
// { title: 'something', director: 'someone' }
export const createFaerie = (data, user) => {
  return axios({
    url: apiUrl + '/create-faerie',
    method: 'POST',
    data: { faerie: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// Index Faerie Requests
// no data, we will need a token
export const indexFaeries = (user) => {
  return axios({
    // method key sets the HTTP verb/method for this request
    // GET is the default method, so we can include or not up to us
    method: 'GET',
    url: apiUrl + '/index-faerie',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// Show Faerie Request
// GET /faeries/:id
export const showFaerie = (id, user) => {
  return axios({
    url: apiUrl + '/show-faerie/' + id,
    // method is optional, default is GET
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// Delete Faerie Request
// DELETE /faeries/:id
export const deleteFaerie = (id, user) => {
  return axios({
    url: apiUrl + '/delete-faerie/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// Update Faerie Request
// PATCH /faeries/:id
export const updateFaerie = (data, id, user) => {
  return axios({
    url: apiUrl + '/update-faerie/' + id,
    method: 'patch',
    data: { faerie: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
