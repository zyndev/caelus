import axios from 'axios'


export const getConnection = () => {
  return axios.get('/connection')
}

export const getDatabase = (connection_id) => {
  return axios.get(`/connection/${connection_id}/database`)
}

export const getTable = (connection_id, database) => {
  return axios.get(`/connection/${connection_id}/database/${database}/table`)
}

export const getColumn = (connection_id, database, table) => {
  return axios.get(`/connection/${connection_id}/database/${database}/table/${table}/column`)
}

export const getConnectionColumn = (connection_id, column) => {
  return axios.get(`/connection/${connection_id}/column/${column}`)
}

export const addConnection = params => {
  return axios.post('/connection', params)
}
