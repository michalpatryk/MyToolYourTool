import axiosAPI from './API'
import { useState } from 'react'

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false)

  const fetch = async () => {
    setIsLoading(true)
    let response
    try {
      response = await axiosAPI.get(url)

      if (process.env.REACT_APP_DEBUG === 'true') {
        console.log('Response: ', response)
      }
    } catch (e) {
      throw e
    } finally {
      setIsLoading(false)
    }

    return {
      ...response.data,
      statusCode: response.status,
    }
  }

  return {
    fetch,
    isLoading,
  }
}

export default useFetch
