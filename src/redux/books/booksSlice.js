/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gRb0vwPao4X8lS6fzQWO/books/';

const initialState = {
  books: {},
  ifSucceed: false,
  isLoading: false,
  error: null,
};

const headers = {
  headers: {
    'content-type': 'application/json',
  },
};

const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return error.message;
    }
  },
);

const postBook = createAsyncThunk('books/postBook', async (book) => {
  try {
    await axios.post(url, book, headers);
    return book;
  } catch (error) {
    return error;
  }
});

const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const data = JSON.stringify({ item_id: id });
  try {
    const response = await axios.delete(url + id, data, headers);
    return response.data;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ifSucceed = true;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.isLoading = false;
    },

    [postBook.pending]: (state) => {
      state.isLoading = true;
    },
    [postBook.fulfilled]: (state) => {
      state.isLoading = false;
      state.ifSucceed = false;
    },
    [postBook.rejected]: (state) => {
      state.isLoading = false;
    },

    [removeBook.pending]: (state) => {
      state.isLoading = true;
    },
    [removeBook.fulfilled]: (state) => {
      state.isLoading = false;
      state.ifSucceed = false;
    },
    [removeBook.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export { fetchBooks, postBook, removeBook };

export default booksSlice.reducer;
