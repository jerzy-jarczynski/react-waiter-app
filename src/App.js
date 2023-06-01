// router
import { Routes, Route } from 'react-router-dom';
// pages
import HomePage from './components/pages/HomePage/HomePage';
import TablePage from './components/pages/TablePage/TablePage';
import TableAddPage from './components/pages/TableAddPage/TableAddPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
// views
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
// bootstrap
import { Container } from 'react-bootstrap';
// redux
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
// react
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table/:id" element={<TablePage />} />
        <Route path="/table/add" element={<TableAddPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
