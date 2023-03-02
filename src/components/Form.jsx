import AddButton from "./AddButton";
import { useDispatch } from 'react-redux';
import { addBook } from "../redux/books/booksSlice";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({title:'', author:''})

  const handleAddBook = (e) => {
    e.preventDefault();
    const id= uuidv4();
    const addNewBook = {
      item_id: id,
      ...book,
    }
    dispatch(addBook(addNewBook));
    setBook({
      title: '',
      author: '',
    })
  }
  
  return(
  <form onSubmit={handleAddBook}>
    <input type="text" placeholder="Title" id="title" value={book.title} />
    <input type="text" placeholder="Author" id="author" value={book.author} />
    <AddButton />
  </form>
  )
};

export default Form;
