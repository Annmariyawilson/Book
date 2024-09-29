import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('books');
    if (serializedState === null) {
      return undefined; 
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('books', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
  preloadedState: loadState(),
  
});

store.subscribe(() => {
  saveState({
    books: store.getState().books,
  });
});

export default store;
