import Navigation from './components/Navigation';
import Products from './components/Products';

const App = () => {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <Navigation brand='ProductSense' />
      <Products />
    </div>
  );
};

export default App;
