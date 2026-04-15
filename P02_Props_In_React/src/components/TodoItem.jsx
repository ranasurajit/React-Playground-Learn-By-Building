const TodoItem = (props) => {
    return (
        <li className="todo-item">
            <span>
                {
                    props?.completed ?
                        <span className='todo-completed'>✅</span> :
                        <input type="checkbox" />
                }
                <span className="lbl-todo">
                    <label>{props?.label}</label>
                </span>
            </span>
            <p>...</p>
        </li>
    );
};

export default TodoItem;
