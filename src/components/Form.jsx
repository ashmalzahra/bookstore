import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/booksSlice';
import AddButton from './AddButton';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '' });

  const handleAddBook = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const addNewBook = {
      item_id: id,
      category: 'Fiction',
      ...book,
    };
    dispatch(postBook(addNewBook));
    setBook({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setBook((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleAddBook}>
      <input type="text" placeholder="Title" id="title" value={book.title} onChange={handleChange} />
      <input type="text" placeholder="Author" id="author" value={book.author} onChange={handleChange} />
      <AddButton />
    </form>
  );
};

export default Form;
