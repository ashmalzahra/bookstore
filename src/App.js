import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './routes/categories';
import Books from './routes/books';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Books />}/>
      <Route  path="categories" element={<Categories />}/>
      </Route>
    </Routes>
  );
}

export default App;
