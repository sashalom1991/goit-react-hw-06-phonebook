import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactObj from './contacts/contacts-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const store = configureStore({
  reducer:{
      contacts: persistReducer(persistConfig, contactObj),
  }, 
  middleware,
  devTools: true,
});

const persistor = persistStore(store);

const obj = {
  store,
  persistor,
};


export default obj;
