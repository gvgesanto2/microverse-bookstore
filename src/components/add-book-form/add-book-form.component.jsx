export default function AddBookForm() {
  return (
    <form className="add-book-form">
      <input
        type="text"
        className="add-book-form__input"
        placeholder="Book title"
        aria-label="Book title"
        required
      />
      <input
        type="text"
        className="add-book-form__input"
        placeholder="Book author"
        aria-label="Book author"
        required
      />
      <button type="submit" className="add-book-form__btn">
        Add book
      </button>
    </form>
  );
}
