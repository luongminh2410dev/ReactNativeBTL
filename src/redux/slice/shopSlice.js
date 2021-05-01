import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchShop = createAsyncThunk(
    'product/fetchShop',
    async () => {
        try {
            const url = 'https://servernodebtl.herokuapp.com/shop';
            const response = await axios.get(url);
            return response.data.products;
        }
        catch (err) {
            console.log(err)
        }
    }
)
const shop = createSlice({
    name: 'shops',
    initialState: [],
    reducers: null,
    extraReducers: {
        [fetchShop.fulfilled]: (state, action) => {
            state = [];
            return state.concat(action.payload);
        }
    }
});

const { reducer, actions } = shop;
export default reducer;