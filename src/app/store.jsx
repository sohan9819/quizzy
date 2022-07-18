import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import gameReducer from '../features/game/gameSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    game: gameReducer,
  },
});
