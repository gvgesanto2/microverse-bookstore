import { useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../../redux/category/category.actions';

import './categories-page.styles.scss';

function CategoriesPage() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(checkStatus())} type="button">Check status</button>;
}

export default CategoriesPage;
