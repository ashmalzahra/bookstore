import Book from '../components/Books';
import Form from '../components/Form';
import { useSelector } from 'react-redux';

const Books = () => {
  const {books} = useSelector((state) => state.cart);

  return(
  <div>
    <ul>
    {books.map((book) => {
      return <Book key={book.item_id} title={book.title} author={book.author}/>
    })}
    </ul>
    <Form />
  </div>
  )
};

export default Books;
