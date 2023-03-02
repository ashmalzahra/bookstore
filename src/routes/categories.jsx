import { useDispatch } from 'react-redux';
import { status } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  return(
  <div>
    <button type="button" onClick={() => dispatch(status())}>Check Status</button>
  </div>
  )
};

export default Categories;
