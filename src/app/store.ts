import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { version } from "react";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { UserApi } from "../features/users/usersAPI";
import { loginAPI } from "../features/login/loginAPI";
import userSlice from "../features/login/userSlice";
import { bookingApi } from "../features/bookings/bookingAPI";
import { paymentApi } from "../features/payment/paymentAPI";
import { roomsApi } from "../features/rooms/roomApi";
import { hotelApi } from "../features/hotels/hotelAPI";
import { ticketApi } from "../features/ticket/ticketAPI";









const persistConfig = {
    key:'root',
    version: 1,
    storage,
    whitelist: ['user', ],
}

const rootReducer = combineReducers({
    [UserApi.reducerPath]: UserApi.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [roomsApi.reducerPath]: roomsApi.reducer,
    [hotelApi.reducerPath]: hotelApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
    
    user:userSlice,
    
    
});

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
        serializableCheck: false,
        
    }).concat(UserApi.middleware)
       .concat(loginAPI.middleware)
       .concat(bookingApi.middleware)
         .concat(paymentApi.middleware)
            .concat(roomsApi.middleware)
            .concat(hotelApi.middleware)
            .concat(ticketApi.middleware),
        

})

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;