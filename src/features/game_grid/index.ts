import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

import initialState from "./state";





export const gameGridSlice = createSlice({
  name: 'game_grid',
  initialState,
  reducers: {
  }
});

export const {  } = gameGridSlice.actions;

export const selectGameGrid = (state: RootState) => state.game_grid;


export default gameGridSlice.reducer;
