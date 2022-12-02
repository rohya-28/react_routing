import {  Route, Routes } from 'react-router-dom' 
import Product from './Pages/Product';
import Welcome from './Pages/Welcome';
import './App.css'
import NavBar from './Component/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes> 
      <Route path='Welcome' element={<Welcome />} />
      <Route path='Product' element={<Product />} />
      </Routes> 
    </>
  );
}

export default App;
