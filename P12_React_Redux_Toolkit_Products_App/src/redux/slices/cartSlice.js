import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const cartItem = state.find((item) => item.id === action.payload.id);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                state.push(action.payload);
            }
        }
    }
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
