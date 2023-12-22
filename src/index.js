import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Collection from './pages/Collection';
import Layout from './components/Layout';
import ProductDetails from './pages/ProductDetails';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout children={<App/>} />}/>
      <Route path='/collection' element={<Layout children={<Collection />}/>}/>
      <Route exact path='/collection/:productId' element={<Layout children={<ProductDetails />}/>} />
    </Routes>
    
    </BrowserRouter>
    
  </React.StrictMode>
);