import axios from 'axios'

let SERVER = 'http://localhost:2021'


export async function get(url, params, headers = {}) {
  let response = await axios.get(`${SERVER}/${url}`, {
    params,
    headers,
  })
  console.log('response', response)
  return response
}

const axiosFormActionDefaults = ({ url, method, params = {}, headers = {} }) => ({
  method,
  url,
  data: params,
  headers,
})

export async function post(url, params, headers = {}) {

  let response = await axios(axiosFormActionDefaults({
    url: `${SERVER}/${url}`,
    method: 'POST',
    params,
    headers,
  }))
  // if (params.token) {
  //   axios.defaults.headers.common['Authorization'] = params.token;
  // } else {
  //   axios.defaults.headers.common['Authorization'] = null;
  console.log('response', response)
  return response
}

export async function del(url) {
  let response = await axios(axiosFormActionDefaults({
    url: `${SERVER}/${url}`,
    method: 'DELETE',
  }))

  return response
}

export async function put(url, params) {
  let response = await axios(axiosFormActionDefaults({
    url: `${SERVER}/${url}`,
    method: 'PUT',
    params
  }))

  return response
}