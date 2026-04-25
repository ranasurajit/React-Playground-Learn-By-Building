import { useCounter } from '../contexts/CounterContext';

const ActionButton = () => {
    const { counter, setCounter } = useCounter();
    return (
        <div className='action-button-container'>
            <button className='btn-action' onClick={() => {
                setCounter(counter + 1);
            }}>
                Increment ⬆️
            </button>
            <button className='btn-action' onClick={() => {
                setCounter(counter - 1);
            }}>
                Decrement ⬇️
            </button>
        </div>
    );
};

export default ActionButton;
