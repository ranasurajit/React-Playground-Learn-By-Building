const Canvas = ({ counter }) => {
    return (
        <div className='canvas-container'>
            <div className='canvas-controls'>
                <h2>Counter Value : {counter}</h2>
                <h3>Counter Value is :
                    {(counter & 1) === 0 ? ' Even' : ' Odd'}
                </h3>
            </div>
        </div>
    );
};

export default Canvas;
