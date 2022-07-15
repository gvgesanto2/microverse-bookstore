import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { removeBookItem } from '../../redux/book/book.actions';
import { selectBookItems } from '../../redux/book/book.selector';

import './book.styles.scss';

export default function Book({ book }) {
  const { title, author } = book;
  const dispatch = useDispatch();
  const bookItems = useSelector(selectBookItems);

  const handleRemoveBook = () => dispatch(removeBookItem(bookItems, book));

  return (
    <li className="book">
      <h2 className="book__title">{title}</h2>
      <h3 className="book__author">{author}</h3>
      <button onClick={handleRemoveBook} type="button" className="book__remove-btn">
        Remove
      </button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
