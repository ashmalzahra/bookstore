import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../components/Form';
import Book from '../components/Books';
import { fetchBooks } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  let data;
  if (isLoading) {
    data = <p>Loading...</p>;
  } else {
    data = Object.keys(books).map((key) => {
      const currentBook = books[key][0];
      return (
        <Book
          key={key}
          id={key}
          title={currentBook.title}
          author={currentBook.author}
        />
      );
    });
  }

  return (
    <section>
      <h1>List of books</h1>
      <ul>{data}</ul>
      <Form />
    </section>
  );
};

export default Books;
