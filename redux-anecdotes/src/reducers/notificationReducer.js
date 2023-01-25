import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        message: null
    },
    reducers: {
        setMessage(state, action) {
            const message = action.payload
            state.message = message
        }
    }
})

export const { setMessage } = notificationSlice.actions

let timer = null

export const setNotification = (message, duration) => {
    return async dispatch => {
        dispatch(setMessage(message))
        clearTimeout(timer)
        timer = setTimeout(() => {
            dispatch(setMessage(''))
        }, duration);
    }
}

export default notificationSlice.reducer
