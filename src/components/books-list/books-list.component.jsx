import { useSelector } from 'react-redux/es/exports';

import { selectBookItems } from '../../redux/book/book.selector';
import Book from '../book/book.component';
import './books-list.styles.scss';

export default function BooksList() {
  const bookItems = useSelector(selectBookItems);

  return (
    <ul className="books-list">
      {bookItems.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
}
