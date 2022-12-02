import { Link, Route, Routes } from 'react-router-dom' 
import Product from './Component/Product';
import Welcome from './Component/Welcome';

function App() {
  return (
    <>
    <div>
      <h1><Link to='/'>Home</Link></h1>
      <h1><Link to='/Welcome'>Welcome</Link></h1>
      <h1><Link to='/Product'>Product</Link></h1>
    </div>
      <Routes> 
      <Route path='Welcome' element={<Welcome />} />
      <Route path='Product' element={<Product />} />
      </Routes> 
    </>
  );
}

export default App;
