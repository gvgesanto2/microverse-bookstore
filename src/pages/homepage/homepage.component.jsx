import AddBookForm from '../../components/add-book-form/add-book-form.component';
import BooksList from '../../components/books-list/books-list.component';

import './homepage.styles.scss';

function HomePage() {
  return (
    <section className="home">
      <BooksList />
      <AddBookForm />
    </section>
  );
}

export default HomePage;
