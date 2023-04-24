import axios from 'axios'

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=979af377',
  params: {
    api_key: '979af377',
    language: 'pt-BR',
    page: 1
  }
})

export default api
