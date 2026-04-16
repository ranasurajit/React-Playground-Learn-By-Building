import { useState } from 'react';
import Button from './components/Button';
import Canvas from './components/Canvas';
import Header from './components/Header';

const App = () => {
  const [counter, setCounter] = useState(0);
  const MAX_VALUE = 10;
  const MIN_VALUE = -10;

  const onIncrement = () => {
    /**
     * To increment state variable multiple times
     * Here current state is dependent on previous
     * value on which react can modify and set
     * 
     * Also React used batch updates on State to
     * do performance optimization so in the batch
     * update, counter is stale if we use :
     * setCounter(counter + 1);
     */
    // setCounter(counter + 1);
    /**
     * Increment Multiple Times Test
     */
    // setCounter(prev => {
    //   return prev + 1;
    // });
    // setCounter(prev => {
    //   return prev + 1;
    // });
    setCounter(prev => {
      if (prev >= MAX_VALUE) {
        return prev;
      }
      return prev + 1;
    });
  };

  const onDecrement = () => {
    setCounter(prev => {
      if (prev <= MIN_VALUE) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <div className='counter-content'>
      <div className='counter-container'>
        <Header title='Counter App' />
        <Canvas counter={counter} />
        <div className='action-container'>
          <span>
            <Button label='Increment ⬆️' onClick={onIncrement} isDisabled={counter === MAX_VALUE} />
          </span>
          <span>
            <Button label='Decrement ⬇️' onClick={onDecrement} isDisabled={counter === MIN_VALUE} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
