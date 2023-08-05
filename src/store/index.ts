import { configureStore } from '@reduxjs/toolkit';
import ThemesReducer from './themeReducer';

export const store = configureStore({
  reducer: {
    ThemesReducer: ThemesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
