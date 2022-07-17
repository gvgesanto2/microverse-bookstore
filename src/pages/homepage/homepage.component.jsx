import AddBookForm from '../../components/add-book-form/add-book-form.component';
import BooksList from '../../components/books-list/books-list.component';

import './homepage.styles.scss';

function HomePage() {
  return (
    <section className="home">
      <BooksList />
      <section className="home__section">
        <h2 className="home__section-title">add book form</h2>
        <AddBookForm />
      </section>
    </section>
  );
}

export default HomePage;
