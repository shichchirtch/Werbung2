import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: 'user_1',
    name: 'Ivan',
    isAuth: true, // потом будет через Telegram
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id
            state.name = action.payload.name
            state.isAuth = true
        },

        logout(state) {
            state.id = null
            state.name = null
            state.isAuth = false
        },
    },
})

export const { setUser, logout } = userSlice.actions
export default userSlice.reducer