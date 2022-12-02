import {  Route, Routes } from 'react-router-dom' 
import Product from './Pages/Product';
import Welcome from './Pages/Welcome';
import './App.css'
import NavBar from './Component/NavBar';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <>
      <NavBar />
      <Routes> 
      <Route path='Welcome' element={<Welcome />} />
      <Route path='Product' element={<Product />} />
      <Route path='ProductDetails/:ProductId' element={<ProductDetails />} />
      
     
      </Routes> 
    </>
  );
}

export default App;
