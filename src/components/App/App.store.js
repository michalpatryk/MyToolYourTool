import { createConnectedStore } from 'undux'

export default createConnectedStore({
    authToken: '',
    userId: 0,
    user: '',
    deviceToken: '',
})