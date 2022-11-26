import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Amplify from 'aws-amplify';

import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import Error from './pages/Error';

import Header from './components/Header';
import Footer from './components/Footer';

import awsExports from './aws-exports.mjs'
Amplify.configure(awsExports)


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/books/:id' element={<BookDetails />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
