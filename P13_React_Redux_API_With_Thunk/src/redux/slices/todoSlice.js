import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://dummyjson.com/todos');
    return response.json();
});

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        isLoading: false,
        data: null,
        hasError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.hasError = false;
        });

        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        });
    }
});

export default todosSlice.reducer;
