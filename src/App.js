import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './routes/categories';
import Books from './routes/books';

function App() {
  return (
    <Routes>
      <Route index element={<Books />}/>
      <Route  path="categories" element={<Categories />}/>
    </Routes>
  );
}

export default App;
