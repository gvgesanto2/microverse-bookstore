import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchBookItems } from '../../redux/book/book.actions';

import {
  selectBookItems,
  selectIsLoading,
} from '../../redux/book/book.selector';
import Book from '../book/book.component';
import Spinner from '../spinner/spinner.component';

import './books-list.styles.scss';

export default function BooksList() {
  const dispatch = useDispatch();
  const bookItems = useSelector(selectBookItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchBookItems());
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className="books-list">
          {bookItems.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ul>
      )}
    </>
  );
}
