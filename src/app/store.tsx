import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/Item/ItemSlice';
export default configureStore({
    reducer: {
        item: itemReducer,
    }
});