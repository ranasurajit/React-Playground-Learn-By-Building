import { useDispatch, useSelector } from 'react-redux';

import { fetchTodos } from './redux/slices/todoSlice.js';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const { data, isLoading, hasError } = useSelector(state => state.todos);

  const todos = data?.todos ?? [];

  useEffect(() => {
    if (!data) {
      dispatch(fetchTodos());
    }
  }, [dispatch, data]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-4'>
      {/* Header */}
      <div className='max-w-3xl mx-auto mb-8 text-center'>
        <h1 className='text-4xl font-extrabold text-slate-800 mb-2'>
          📝 Todo Dashboard
        </h1>
        <p className='text-lg text-slate-500'>
          Manage your tasks efficiently with Redux Toolkit
        </p>
      </div>
      {/* Content */}
      <div className='max-w-3xl mx-auto'>
        {isLoading ? (
          <div className='flex flex-col items-center justify-center py-16'>
            <div className='w-12 h-12 border-4 border-slate-300 border-t-slate-700 rounded-full animate-spin mb-4'></div>
            <p className='text-xl text-slate-500 animate-pulse'>
              Loading todos...
            </p>
          </div>
        ) : hasError ? (
          <div className='text-center py-16'>
            <p className='text-2xl text-red-500 font-semibold'>
              ❌ Failed to load todos
            </p>
          </div>
        ) : todos.length === 0 ? (
          <div className='text-center py-16'>
            <p className='text-xl text-slate-500'>
              No todos available
            </p>
          </div>
        ) : (
          <div className='flex flex-col gap-4'>
            {todos.map((todo) => (
              <div
                key={todo.id}
                className='
                flex items-center justify-between
                bg-white rounded-2xl shadow-md p-5
                hover:shadow-xl transition-all duration-300
              '
              >
                {/* Left */}
                <div className='flex items-center gap-4'>
                  <span
                    className={`
                    w-4 h-4 rounded-full
                    ${todo.completed ? 'bg-green-500' : 'bg-yellow-400'}
                  `}
                  ></span>
                  <p
                    className={`
                    text-lg font-medium
                    ${todo.completed
                        ? 'line-through text-gray-400'
                        : 'text-gray-800'}
                  `}
                  >
                    {todo.todo}
                  </p>
                </div>
                {/* Right */}
                <span
                  className={`
                  text-sm font-semibold px-3 py-1 rounded-full
                  ${todo.completed
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'}
                `}
                >
                  {todo.completed ? 'Done' : 'Pending'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
