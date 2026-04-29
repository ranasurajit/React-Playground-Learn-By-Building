import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import RecipeDetails from './components/RecipeDetails';
import Categories from './components/Categories';
import About from './components/About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Dashboard />} />
          <Route path='/recipes' element={<Navigate to='/recipes/1' />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
