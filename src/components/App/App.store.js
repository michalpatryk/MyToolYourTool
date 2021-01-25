import { createConnectedStore } from 'undux'

// type State = {
//     authToken: string,
//     userId: number,
//     user: string,
//     deviceToken: string,
// }

// const initialState: State = {
//     authToken: '',
//     userId: 0,
//     user: '',
//     deviceToken: ''
// }

// export default createConnectedStore(initialState)

export default createConnectedStore({
    authToken: '',
    userId: 0,
    user: '',
    deviceToken: '',
})