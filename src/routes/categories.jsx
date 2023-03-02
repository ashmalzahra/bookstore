import { useDispatch, useSelector } from 'react-redux';
import { status } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  return (
    <div>
      <button type="button" onClick={() => dispatch(status())}>Check Status</button>
      <br />
      <span>{categories}</span>
    </div>
  );
};

export default Categories;
