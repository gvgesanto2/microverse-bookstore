import Book from '../book/book.component';
import './books-list.styles.scss';

const books = [
  {
    id: 1,
    title: 'title 1',
    author: 'author 1',
  },
  {
    id: 2,
    title: 'title 2',
    author: 'author 2',
  },
];

export default function BooksList() {
  return (
    <ul className="books-list">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
}
