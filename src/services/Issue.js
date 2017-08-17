import axios from 'axios'
import configs from '../configs'
import Promise from 'promise'

let _token = ''

const setToken = (token) => {
  _token = token
}

const create = (issue) => {
  return new Promise((resolve, reject) => {
    if(!_token) {
      reject({ message: 'Token is not set.', error: { message: 'TOKEN_NOT_SET', error: null } })
    }
    axios.post(`${configs.API_URL}issue`, issue, {
      headers: { 'Authorization': _token }
    }).then(data => {
      resolve(data.data)
    }).catch(err => {
      reject(err.response.data)
    })
  })
}

export default {
  setToken,
  create
}
