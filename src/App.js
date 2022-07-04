import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header.component';
import CategoriesPage from './pages/categories-page/categories-page.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
