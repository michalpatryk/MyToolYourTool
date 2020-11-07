import React from 'react'
import unsplashAPI from './unsplashAPI'
import PropTypes from 'prop-types'

const useRandomThematicImg = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [image, setImage] = React.useState(null)
  const [error, setError] = React.useState(null)

  const getImage = async (thema) => {
    try {
      setIsLoading(true)
      const response = await unsplashAPI(
        `/photos/random${thema ? '?query=' + thema : ''}`
      )
      setImage({ ...response.data })
      if (process.env.REACT_APP_DEBUG === 'true')
        console.log('unsplash', response.data)
    } catch (error) {
      setError({
        code: error.response?.status?.toString(),
        text: 'Nie można załadować zdjęcia',
      })
      if (process.env.REACT_APP_DEBUG === 'true') console.log(error.response)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    image,
    getImage,
    isLoading,
    error,
  }
}

useRandomThematicImg.propTypes = {
  thema: PropTypes.string,
}

export default useRandomThematicImg
