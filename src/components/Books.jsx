/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import RemoveButton from './RemoveButton';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      &quot;
      { title }
      &quot;
      by &nbsp;
      { author }
      <RemoveButton onClick={handleRemoveBook} />
    </li>
  );
};

export default Book;
