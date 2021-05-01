import { createSlice } from '@reduxjs/toolkit'
const my_cart = [1, 2, 5, 7]

const cart = createSlice({
    name: 'carts',
    initialState: my_cart,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.id)
        },
        removeProduct: (state, action) => {
            state.splice(action.id, 1)
        }
    }
})

const { reducer, actions } = cart;
export const { addProduct, removeProduct } = actions;
export default reducer;