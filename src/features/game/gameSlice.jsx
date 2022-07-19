import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  difficulty: 'easy',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
  },
});

export const { setCategory, setDifficulty } = gameSlice.actions;
export const categorySelector = (state) => state.game.category;
export const difficultySelector = (state) => state.game.difficulty;
export default gameSlice.reducer;
