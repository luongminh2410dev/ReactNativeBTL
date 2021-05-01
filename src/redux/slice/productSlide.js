import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async () => {
        try {
            const url = 'https://servernodebtl.herokuapp.com/product';
            const response = await axios.get(url);
            return response.data.products;
        }
        catch (err) {
            return console.log(err)
        }
    }
)
const products = createSlice({
    name: 'products',
    initialState: [],
    reducers: null,
    extraReducers: {
        [fetchProduct.fulfilled]: (state, action) => {
            state = [];
            return state.concat(action.payload);
        }
    }
});

const { reducer } = products;
export default reducer;