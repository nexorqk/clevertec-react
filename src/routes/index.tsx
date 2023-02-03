import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout, LayoutMainPage, Terms } from '../components';
import { BookPage, MainPage, ProfilePage } from '../pages';

export const Navigator = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<LayoutMainPage />}>
          <Route path='/' element={<Navigate to='/books/all' />} />
          <Route path='/books/:category' element={<MainPage />} />
          <Route path='/terms' element={<Terms contentView='terms' />} />
          <Route path='/contract' element={<Terms contentView='contract' />} />
        </Route>
        <Route path='/books/:category/:bookId' element={<BookPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Route>
    </Routes>
  </HashRouter>
);
