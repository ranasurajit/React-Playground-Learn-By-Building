import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar brand='React-Redux-ShopperStop' />
        <Routes>
          <Route path='' element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
