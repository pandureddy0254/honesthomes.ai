import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from './listingsSlice';
import userPreferencesReducer from './userPreferencesSlice';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
    userPreferences: userPreferencesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
