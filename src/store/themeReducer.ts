import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialThemes {
  themes: boolean;
}

const initialThemes: IInitialThemes = {
  themes: localStorage.getItem('themes') ? JSON.parse(`${localStorage.getItem('themes')}`) : true,
};

export const ThemesSlice = createSlice({
  name: 'Themes',
  initialState: initialThemes,
  reducers: {
    setThemes: (state: IInitialThemes, action) => {
      state.themes = action.payload;
    },
  },
});

const { actions, reducer: ThemesReducer } = ThemesSlice;

export const { setThemes } = actions;

export default ThemesReducer;
