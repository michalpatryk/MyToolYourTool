import axiosAPI from './API'

export const usePost = (url) => {
    const send = async (data) => {
        const response = await axiosAPI.post(url, data)
        if (process.env.REACT_APP_DEBUG === 'true') {
            console.log(`Posting data on ${url}`, data)
            console.log('Response: ', response)
          }

          return { 
              ...response.data, 
              statusCode: response.status 
            }
    }

    return {
        send
    }
}

export default usePost
