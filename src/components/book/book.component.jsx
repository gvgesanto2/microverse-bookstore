import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBookItem } from '../../redux/book/book.actions';

import './book.styles.scss';

export default function Book({ book }) {
  const { title, author, category } = book;
  const dispatch = useDispatch();

  const handleRemoveBook = () => dispatch(removeBookItem(book));

  return (
    <li className="book">
      <div className="book__info-box">
        <p className="book__category">{category}</p>
        <h2 className="book__title">{title}</h2>
        <h3 className="book__author">{author}</h3>
        <ul className="book__btn-group">
          <li>
            <button
              type="button"
              className="book__btn"
            >
              comments
            </button>
          </li>
          <li>
            <button
              onClick={handleRemoveBook}
              type="button"
              className="book__btn"
            >
              remove
            </button>
          </li>
          <li>
            <button
              type="button"
              className="book__btn"
            >
              edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book__progress-container">
        <div className="book__progress" />
        <div>
          <h3>100%</h3>
          <span>Completed</span>
        </div>
      </div>
      <div>
        <h3 className="book__chapter">current chapter</h3>
        <h4 className="book__chapter-title">Final Chapter</h4>
        <button className="book__progress-btn" type="button">Update Progress</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
