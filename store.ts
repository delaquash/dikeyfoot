import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './src/redux/ProductSlice';
// ...
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    // two: twoSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store