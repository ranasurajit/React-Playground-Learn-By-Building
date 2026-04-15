const TodoItem = () => {
    return (
        <li className="todo-item">
            <span>
                <input type="checkbox" />
                <span className="lbl-todo">Eat</span>
            </span>
            <p>...</p>
        </li>
    );
};

export default TodoItem;
