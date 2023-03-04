import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from '../components/Books';
import Form from '../components/Form';
import { fetchBooks } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books.books);
  const isLoading = useSelector((store) => store.books.isLoading);

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = Object.keys(books).map((key) => {
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
      <ul>{content}</ul>
      <Form />
    </section>
  );
};

export default Books;
