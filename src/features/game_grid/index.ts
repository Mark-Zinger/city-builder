import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

import initialState from "./state";





export const gameGridSlice = createSlice({
  name: 'game_grid',
  initialState,
  reducers: {
    createTile: (state, action:PayloadAction<{position: [number, number], value: number, allowed: 0}>) => {
      const {position: [x, y], value, allowed} = action.payload;
      if(state.grid[x]!==undefined && state.grid[x][y] === allowed) {
        state.grid[x][y] = value
      }
    }
  }
});

export const { createTile } = gameGridSlice.actions;

export const selectGameGrid = (state: RootState) => state.game_grid;


export default gameGridSlice.reducer;
