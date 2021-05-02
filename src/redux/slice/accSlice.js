import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAcc = createAsyncThunk(
    'product/fetchAcc',
    async (params) => {
        try {
            const { user, pass } = params;
            const url = `https://servernodebtl.herokuapp.com/account/${user}/${pass}`;
            const response = await axios.get(url);
            return response.data.products;
        }
        catch (err) {
            console.log(err)
        }
    }
)
const account = createSlice({
    name: 'account',
    initialState: [],
    reducers: null,
    extraReducers: {
        [fetchAcc.fulfilled]: (state, action) => {
            state = [];
            return state.concat(action.payload);
        }
    }
});

const { reducer } = account;
export default reducer;