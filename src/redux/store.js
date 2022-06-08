import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from "./accounterSlice";


import {
    colorModeReducer,
    addRevReducer,
} from './reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};



export const Store = configureStore({
    reducer: {
        account: accountReducer,
        settings: colorModeReducer,
        revNote: addRevReducer,

    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

persistStore(Store);

