import { useState, useEffect } from 'react'
import unsplashAPI from './unsplashAPI'

const usePhotoSearch = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [keywords, setKeywords] = useState([])
  const [images, setImages] = useState([])
  const [collection, setCollection] = useState([])

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  useEffect(() => {
    console.log('Updating collection')
    setCollection([])
  }, [keywords])

  const search = async (length) => {
    let localImages = []
    try {
      setIsLoading(true)
      if(collection.length === 0) {
        const response = await unsplashAPI(`/search/photos?query=${keywords.join(',')}&per_page=30`)
        
        console.log('Response images: ', response.data.results)
    
        if (process.env.REACT_APP_DEBUG === 'true')
            console.log('Raw response: ', response)

        localImages = response.data.results
        setCollection(response.data.results)
      } else {
        localImages = collection
      }
    } catch (error) {
      setError({
        code: error.response?.status?.toString(),
        text: 'Coś poszło nie tak jak powinno, spróbuj jeszcze raz',
        error: error,
      })

      if (process.env.REACT_APP_DEBUG === 'true')
        console.warn('Loading error: ', error)
    } finally {
      setIsLoading(false)
    }

    shuffle(localImages)
    setImages(localImages.slice(0, length))
  }

  return {
    setKeywords,
    search,
    isLoading,
    images,
    error,
  }
}

export default usePhotoSearch
