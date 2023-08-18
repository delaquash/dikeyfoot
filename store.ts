import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './src/redux/ProductSlice';
import { cartSlice } from './src/redux/CartSlice';
// ...
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    carts: cartSlice.reducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store