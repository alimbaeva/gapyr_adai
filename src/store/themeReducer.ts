import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialThemes {
  themes: boolean;
  modalOpen: boolean;
}

const initialThemes: IInitialThemes = {
  themes: localStorage.getItem('themes') ? JSON.parse(`${localStorage.getItem('themes')}`) : false,
  modalOpen: false,
};

export const ThemesSlice = createSlice({
  name: 'Themes',
  initialState: initialThemes,
  reducers: {
    setThemes: (state: IInitialThemes, action) => {
      state.themes = action.payload;
    },
    setModalOpen: (state: IInitialThemes, action) => {
      state.modalOpen = action.payload;
    },
  },
});

const { actions, reducer: ThemesReducer } = ThemesSlice;

export const { setThemes, setModalOpen } = actions;

export default ThemesReducer;
