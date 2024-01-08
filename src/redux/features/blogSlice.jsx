import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const createBlog = createAsyncThunk('blogs/createBlog', async (title, description, image_url, blog_tags, user, { rejectWithValue }) => {
    try {
        const response = await fetch("http://localhost:3001/api/blogs/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                description: description,
                image_url: image_url,
                blog_tags: blog_tags,
                user: user
            }),
        });
        return response.json()
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        isLoading: false,
        error: null,
    },
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogs.push(action.payload);
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

// Action creators are generated for each case reducer function
export const {  } = blogsSlice.actions
export default blogsSlice.reducer