import { useCounter } from '../contexts/CounterContext';

const Counter = () => {
    const { counter } = useCounter();
    return (
        <div className='container'>
            <h2 className='title'>Counter (From Context API) : {counter}</h2>
        </div>
    );
};

export default Counter;
