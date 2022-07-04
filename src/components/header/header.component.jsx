import { Link, Outlet } from 'react-router-dom';

import MainContent from '../main-content/main-content.component';

import './header.styles.scss';

const navigationLinks = [
  {
    id: 1,
    title: 'books',
    route: '/',
  },
  {
    id: 2,
    title: 'categories',
    route: '/categories',
  },
];

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <Link to="/">
            <span className="header__logo">Bookstore CMS</span>
          </Link>

          <nav className="header__nav">
            <ul className="header__nav-list">
              {navigationLinks.map(({ id, title, route }) => (
                <li key={id}>
                  <Link className="header__nav-link" to={route}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button type="button" className="user-btn">
            User
          </button>
        </div>
      </header>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}
