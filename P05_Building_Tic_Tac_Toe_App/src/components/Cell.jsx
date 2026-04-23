const Cell = (props) => {
    const cellBackground = (value) => {
        if (value === 'X') {
            return 'aquamarine';
        } else if (value === 'O') {
            return 'darksalmon';
        }
        return '';
    };

    return (
        <div className='board-cell' style={{
            backgroundColor: cellBackground(props.value)
        }} onClick={props.cellClick}>
            <label className='cell-label'>{props.value}</label>
        </div>
    );
};

export default Cell;
