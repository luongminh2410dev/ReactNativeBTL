import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import productReducer from './slice/productSlide'
import shopReducer from './slice/shopSlice'
const store = configureStore({
    reducer: {
        carts: cartReducer,
        shops: shopReducer,
        products: productReducer,
    },
});

export default store;