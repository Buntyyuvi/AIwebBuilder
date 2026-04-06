// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice"

// const store = configureStore({
//     reducer:{
//         user:userSlice
//     }
// })

// export default store;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
 import userSlice from "./userSlice"
import { CloudCog } from 'lucide-react';


const rootReducer = combineReducers({
  user:userSlice
});
// console.log("Storage:-", storage)

const persistConfig = {
  key: 'Kalli-ai',
  version: 1,
  storage:storage.default,
  // whitelist: ['user'], // optional: only persist these slices
  // blacklist: ['ui'],   // optional: don't persist these slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types dispatched by redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
