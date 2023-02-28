import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
}


const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, {payload}) => {
            state.books.push(payload)
        },
        removeBook: (state, {payload}) => ({
            ...state,
      books: state.books.filter((book) => book.id !== payload.id),
        }),
    },
})

export default booksSlice.reducer
export const {addBook, removeBook} = booksSlice.actions