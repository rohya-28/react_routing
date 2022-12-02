import { Route, Routes } from 'react-router-dom' 
import Product from './Component/Product';
import Welcome from './Component/Welcome';

function App() {
  return (
     <Routes> 
      <Route path='Welcome' element={<Welcome />} />
      <Route path='Product' element={<Product />} />
      </Routes> 
  );
}

export default App;
