import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addUser = createAsyncThunk('userDetails/addUser', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://social-media-api.cyclic.app/api/users/signup', data);
        const result = await response.data;
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: {
        users: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        // Add your regular reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users.push(action.payload);
            })
            .addCase(addUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; // Assuming payload is the error message
            });
    },
});

export const { /* your regular action creators */ } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
