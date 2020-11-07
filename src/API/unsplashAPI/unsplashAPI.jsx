import axios from 'axios'

const unsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com/',
})

unsplashAPI.defaults.headers.common[
  'Authorization'
] = `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN}`

export default unsplashAPI
