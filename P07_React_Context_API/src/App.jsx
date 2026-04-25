import Counter from './components/Counter';
import './App.css';
import ActionButton from './components/ActionButton';

const App = () => {
  return (
    <div className='counter-container'>
      <div>
        <h1>React Context API - Counter App</h1>
      </div>
      <div className='main-content'>
        <Counter />
        <ActionButton />
        <ActionButton />
        <ActionButton />
        <ActionButton />
      </div>
    </div>
  );
};

export default App;
