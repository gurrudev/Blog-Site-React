/* eslint-disable no-empty-pattern */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const addUser = createAsyncThunk('userDetails/addUser', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}/api/users/signup`, data);
        const result = await response.data;
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export const userLogin = createAsyncThunk('userDetails/userLogin', async (credentials, { rejectWithValue }) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const result = await response.json();

        // Extract the token from the response
        const { token } = result;

        // Store the token in localStorage or state (as per your application flow)
        // For example, storing in localStorage:
        localStorage.setItem('token', token);

        // Return the user data or necessary information from the response
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const userUpdate = createAsyncThunk('userDetails/update', async({id,data},  {rejectWithValue})=>{
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/users/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        return result;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const logout = createAction('userDetails/logout');

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: {
        users: [],
        isLoading: false,
        error: null,
    },
    reducers: {
       
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
                state.error = action.payload;
            })
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.loggedInUser = action.payload;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; 
            })
            .addCase(userUpdate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(userUpdate.fulfilled, (state, action) => {
                state.isLoading = false
                state.users.push(action.payload)
            })
            .addCase(userUpdate.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            // Handling logout action
            .addCase(logout, (state) => {
                // Clear user-related data on logout
                state.isLoading = false;
                state.loggedInUser = null;
                state.error = null;
                localStorage.removeItem('token'); // Remove token from localStorage
            });
    },
});

export const { /* your regular action creators */ } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
