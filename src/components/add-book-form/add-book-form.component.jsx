import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';

import { addBookItem } from '../../redux/book/book.actions';

const defaultFormFields = {
  title: '',
  author: '',
};

export default function AddBookForm() {
  const dispatch = useDispatch();
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

    dispatch(
      addBookItem({
        id: uuidv4(),
        title,
        author,
        category: 'some category',
      }),
    );

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
      <button type="submit" className="add-book-form__btn">
        Add book
      </button>
    </form>
  );
}
