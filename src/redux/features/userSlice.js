import {createSlice} from '@reduxjs/toolkit'

export const userDetails = createSlice({
    name: 'userDetails',
    initialState:{
        users: [],
        isLoading: false,
        error: null
    }
})

export default userDetails.reducer