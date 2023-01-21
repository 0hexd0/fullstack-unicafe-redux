import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        type: null,
        message: null
    },
    reducers: {
        show(state, action) {
            const { type, message } = action.payload
            state.type = type
            state.message = message
        },
        hide(state) {
            state.type = null
            state.message = null
        }
    }
})

export const { show, hide } = notificationSlice.actions

export default notificationSlice.reducer
