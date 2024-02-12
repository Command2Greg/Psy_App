import { createSlice } from '@reduxjs/toolkit';
import { AppDataState } from '../types';

export const name = 'appData';

const userInitialState: AppDataState = {
  psyhologists: [],
};

export const appDataSlice = createSlice({
  name,
  initialState: userInitialState,
  reducers: {
    getAllPsyhologists(state, action) {
      state.psyhologists = action.payload;
    },
  },
});

export const { getAllPsyhologists } = appDataSlice.actions;
