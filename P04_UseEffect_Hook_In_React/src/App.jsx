import { useState, useEffect } from 'react';
import Counter from './components/Counter';
import Button from './components/Button';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showCounterApp, setShowCounterApp] = useState(true);

  /**
   * What React does in Strict Mode (DEV only)
   * For every update, React simulates:
   * 
   * Mount → Cleanup → Mount again
   * 
   * so we would see same logs twice in Dev Mode Strict Mode
   */

  // called on rendering App
  useEffect(() => {
    console.log('App is rendering!', counter);
    return () => {
      console.log('App is removed');
    }
  }, []);

  // called while state 'counter' changes on App
  useEffect(() => {
    console.log('App state is updated!', counter);
    return () => {
      console.log('App last state counter removed', counter);
    }
  }, [counter]);

  return (
    <div className='counter-content'>
      {
        showCounterApp ? (
          <Counter counter={counter} setCounter={setCounter} />
        ) : <></>
      }
      <div className='counter-container'>
        <Button label='Show Counter App 🧿' onClick={() => setShowCounterApp(!showCounterApp)} />
      </div>
    </div>
  );
};

export default App;
