import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addBookItem } from '../../redux/books/book.actions';

import { selectBookItems } from '../../redux/books/book.selector';
import { genNewIdForElem } from '../../utils/id.utils';

const defaultFormFields = {
  title: '',
  author: '',
};

export default function AddBookForm() {
  const dispatch = useDispatch();
  const bookItems = useSelector(selectBookItems);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, author } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addBookItem(bookItems, {
      id: genNewIdForElem(bookItems),
      title,
      author,
    }));

    resetFormFields();
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <input
        type="text"
        className="add-book-form__input"
        placeholder="Book title"
        aria-label="Book title"
        name="title"
        value={title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        className="add-book-form__input"
        placeholder="Book author"
        aria-label="Book author"
        name="author"
        value={author}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="add-book-form__btn"
      >
        Add book
      </button>
    </form>
  );
}
