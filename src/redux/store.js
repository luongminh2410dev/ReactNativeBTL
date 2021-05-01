import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import productReducer from './slice/productSlide'
import shopReducer from './slice/shopSlice'
import accReducer from './slice/accSlice'
const store = configureStore({
    reducer: {
        carts: cartReducer,
        shops: shopReducer,
        products: productReducer,
        account: accReducer,
    },
});

export default store;