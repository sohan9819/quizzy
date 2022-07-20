import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: {
    name: 'Any Category',
    value: '',
  },
  difficulty: 'easy',
  score: 0,
  userAnswers: [],
  outOff: 0,
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
    addUserAnswers: (state, action) => {
      state.userAnswers = [...state.userAnswers, action.payload];
    },
    setScore: (state, action) => {
      state.score = state.score + action.payload;
    },
    setOutOff: (state, action) => {
      console.log('Outoff state :', action.payload);
      state.outOff = action.payload;
    },
    resetGame: (state, action) => {
      state.category = {
        name: 'Any Category',
        value: '',
      };
      state.difficulty = 'easy';
      state.score = 0;
      state.userAnswers = [];
      state.outOff = 0;
    },
  },
});

export const {
  setCategory,
  setDifficulty,
  addUserAnswers,
  setScore,
  setOutOff,
  resetGame,
} = gameSlice.actions;
export const categoryNameSelector = (state) => state.game.category.name;
export const categoryValueSelector = (state) => state.game.category.value;
export const difficultySelector = (state) => state.game.difficulty;
export const userAnswersSelector = (state) => state.game.userAnswers;
export const scoreSelector = (state) => state.game.score;
export const outOffSelector = (state) => state.game.outOff;
export default gameSlice.reducer;
