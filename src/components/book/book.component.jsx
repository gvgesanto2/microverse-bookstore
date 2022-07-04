import PropTypes from 'prop-types';

import './book.styles.scss';

export default function Book({ book }) {
  const { title, author } = book;
  return (
    <li className="book">
      <h2 className="book__title">{title}</h2>
      <h3 className="book__author">{author}</h3>
      <button type="button" className="book__remove-btn">
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
