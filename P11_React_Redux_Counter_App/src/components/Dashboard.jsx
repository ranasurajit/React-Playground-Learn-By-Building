import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import Card from './Card';

const Dashboard = () => {
    const dispatch = useDispatch();

    const increment = (e) => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrement = (e) => {
        dispatch({ type: 'DECREMENT' });
    };

    const reset = (e) => {
        dispatch({ type: 'RESET' });
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100'>
            <Card />
            <div className='flex gap-4'>
                <Button
                    label='Increment ⬆️'
                    onClick={increment}
                />
                <Button
                    label='➖ Decrement ⬇️'
                    onClick={decrement}
                />
                <Button
                    label='Reset 🔄'
                    onClick={reset}
                />
            </div>
        </div>
    );
};

export default Dashboard;
