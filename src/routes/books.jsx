import { useSelector } from 'react-redux';
import Book from '../components/Books';
import Form from '../components/Form';

const Books = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
