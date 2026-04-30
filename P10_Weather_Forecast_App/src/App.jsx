import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Forecast from './components/Forecast';
import Maps from './components/Maps';
import About from './components/About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/forecast' element={<Forecast />} />
          <Route path='/maps' element={<Maps />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
