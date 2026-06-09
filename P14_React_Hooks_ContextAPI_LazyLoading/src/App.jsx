import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Tasks = lazy(() => import('./pages/Tasks'));
const Settings = lazy(() => import('./pages/Settings'));

const fallbackRoute = () => {
  return (
    <h4>Loading...</h4>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={fallbackRoute()}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/tasks' element={<Tasks />}></Route>
            <Route path='/settings' element={<Settings />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
