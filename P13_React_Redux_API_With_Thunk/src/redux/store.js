import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './slices/todoSlice.js';

const store = configureStore({
    reducer: {
        todos: todosReducer
    },
    devTools: true
});

export default store;
