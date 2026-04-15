import AddTodoButton from './components/AddTodoButton';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

const App = () => {
  return (
    <div className='todo-content'>
      <div className='todo-container'>
        <Header />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <AddTodoButton />
      </div>
    </div>
  );
};

export default App;
