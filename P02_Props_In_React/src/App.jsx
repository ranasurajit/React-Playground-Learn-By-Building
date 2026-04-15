import AddTodoButton from './components/AddTodoButton';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

const App = () => {
  return (
    <div className='todo-content'>
      <div className='todo-container'>
        <Header title='Todoie App' />
        <TodoItem label='Eat' completed={true} />
        <TodoItem label='Exercise' />
        <TodoItem label='Study' />
        <TodoItem label='Play' />
        <TodoItem label='Eat Again' />
        <TodoItem label='Sleep' />
        <AddTodoButton label='Add Todo' />
      </div>
    </div>
  );
};

export default App;
