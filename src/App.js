import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Buying from './pages/Buying';
import Selling from './pages/Selling';
import Listings from './pages/Listings';
import ListingDetails from './pages/ListingDetails';
import Contact from './pages/Contact';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buying" element={<Buying />} />
      <Route path="/selling" element={<Selling />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/listings/:slug" element={<ListingDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
